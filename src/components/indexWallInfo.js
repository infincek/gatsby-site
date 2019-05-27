import React from "react"
import { StaticQuery, graphql } from "gatsby"
import marked from "marked"
import Slider from "react-slick"
import Img from 'gatsby-image'

var settings = {
  	dots: true,
	arrows: false,
  	infinite: true,
  	speed: 500,
  	slidesToShow: 1,
  	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 4000
};

export default props => (
  	<StaticQuery
	    query={graphql`
			query wallQuery {
	  		  	allBaseYaml {
	  			  	edges {
	  				  	node {
	  					  	id
	  					  	data{
	  						  	carousel{
									image{
										publicURL
										childImageSharp {
											fluid(maxWidth: 1920) {
											  srcSet
											  ...GatsbyImageSharpFluid_tracedSVG
											}
										}
									}
								}
								announcements
	  					  	}
	  				  	}
	  			  	}
	  		  	}
	  	  	}
	    `}
		render={data => (
			<React.Fragment>
				<div id="wall">
					 <div className="welcome-slider">
						<Slider  {...settings}>
							{getCarousel(data)}
						</Slider>
					 </div>
				</div>
				<div id="announcements-strip">
					<i className="fa fa-bell ico"></i>
					<div className="strip">
						<ul>
							{getAnnouncements(data)}
						</ul>
					</div>
				</div>
			</React.Fragment>
		)}
	/>
)

function getCarousel(data){
	var c = [];
	data.allBaseYaml.edges[0].node.data.carousel.forEach(function(item,i){
		c.push(<div className="carousel-item" key={"CARO"+i}><Img key={"CARO"+i} fluid={item.image.childImageSharp.fluid}/></div>);
	})
	return c;
}

function getAnnouncements(data){
	var c = [];
	data.allBaseYaml.edges[0].node.data.announcements.forEach(function(item,i){
		c.push(<li key={"WAN"+i} dangerouslySetInnerHTML={{ __html: marked(item)}}></li>);
	})
	return c;
}
