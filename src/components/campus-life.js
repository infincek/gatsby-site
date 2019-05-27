import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Slider from "react-slick"

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
      query campusLifeQuery{
		allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/campus-life/"} }){
		    edges {
		        node {
		          	id
					frontmatter {
			          	title
			          	name
			          	description
						image{
							publicURL
							childImageSharp {
				                fluid(maxWidth: 1000) {
				                  srcSet
				                  ...GatsbyImageSharpFluid_tracedSVG
				                }
				             }
						}
			        }
		        }
		    }
		}
      }
    `}
    render={data => (
		<Slider  {...settings}>
			{getContents(data)}
		</Slider>
	)}
  />
);

function getContents(data){
	const content = [];
	data.allMarkdownRemark.edges.forEach(function(item,i){
		content.push(<div className="carousel-item" key={"CL-"+i}>
			<div className="row" key={"CLP-"+i}>
				<div className="col s12 m6 l5" key={"CLC1-"+i}>
					<Img fluid={item.node.frontmatter.image.childImageSharp.fluid} key={"CLD1"+i} alt=""/>
				</div>
				<div className="col s12 m6 l7" key={"CLC2-"+i}>
					<h3 key={"CLCD2-"+i}>{item.node.frontmatter.title}</h3>
					<p key={"CLCD3-"+i}>{item.node.frontmatter.description}</p>
					<a key={"CLCD4-"+i} className="btn btn-medium waves-effect" href={item.node.frontmatter.name}>Know More</a>
				</div>
			</div>
		</div>);
	})
	return content;
}
