import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import marked from 'marked';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import { Scrollbars } from 'react-custom-scrollbars';
import Announcements from './announcements';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from '../style/wall.module.less';
import ann from '../style/announcements.module.less';

var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
};

class Wall extends React.Component {
    componentDidMount() {}
    render() {
        const data = this.props.data;
        return (
            <React.Fragment>
                <div id="wall" className={style.wall}>
                    <div className="welcome-slider">
                        <Slider {...settings}>{getCarousel(data)}</Slider>
                    </div>
                    <div className={"announcements "+ann.announcements}>
                        <Scrollbars autoHide>
                            <div className="title-strip">
                                <h3>Announcements <Link to="/announcements-and-news" title="View all Announcements"><i className="fa fa-chain"></i></Link></h3>
                            </div>
                            <ul className="collection">
                                <Announcements />
                            </ul>
                        </Scrollbars>
                    </div>
                </div>
                <div className={style.announcements}>
                    <i className="fa fa-bell ico" />
                    <div className="strip">
                        <ul>{getAnnouncements(data)}</ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query wallQuery {
                allBaseYaml {
                    edges {
                        node {
                            id
                            data {
                                carousel {
                                    image {
                                        publicURL
                                        childImageSharp {
                                            fluid(maxWidth: 1920) {
                                                srcSet
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                    title
                                    description
                                }
                                announcements
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Wall data={data} />}
    />
);

function getCarousel(data) {
    var c = [];
    data.allBaseYaml.edges[0].node.data.carousel.forEach(function(item, i) {
        c.push(<CarouselItem data={item} key={'C' + i} />);
    });
    return c;
}

function getAnnouncements(data) {
    var c = [];
    data.allBaseYaml.edges[0].node.data.announcements.forEach(function(
        item,
        i
    ) {
        c.push(
            <li
                key={'WAN' + i}
                dangerouslySetInnerHTML={{
                    __html: marked(item)
                }}
            />
        );
    });
    return c;
}

const CarouselItem = ({ data }) => {
    return (
        <div className="carousel-item">
            <Img fluid={data.image.childImageSharp.fluid} />
            {(data.title || data.description) && (
                <div className="overlay">
                    <div className="description">
                        {data.title && <h3>{data.title}</h3>}
                        {data.description && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marked(data.description)
                                }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
