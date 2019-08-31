import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
};

export default props => (
    <StaticQuery
        query={graphql`
            query campusLifeQuery {
                allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/campus-life/" } }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                description
                                image {
                                    publicURL
                                    childImageSharp {
                                        fluid(maxWidth: 1000) {
                                            srcSet
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                    }
                                }
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Slider {...settings}>{getContents(data)}</Slider>}
    />
);

const Carousel = ({ data }) => (
    <div className="carousel-item">
        <div className="row">
            <div className="col s12 m6 l5">
                <Img
                    fluid={data.node.frontmatter.image.childImageSharp.fluid}
                    alt={data.node.frontmatter.title}
                />
            </div>
            <div className="col s12 m6 l7">
                <h3>{data.node.frontmatter.title}</h3>
                <p>{data.node.frontmatter.description}</p>
                <Link
                    className="btn"
                    title={data.node.frontmatter.title}
                    to={data.node.fields.slug}
                >
                    Know More
                </Link>
            </div>
        </div>
    </div>
);

function getContents(data) {
    const content = [];
    data.allMarkdownRemark.edges.forEach(function(item, i) {
        content.push(<Carousel key={item.node.id} data={item} />);
    });
    return content;
}
