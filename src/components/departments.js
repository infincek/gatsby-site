import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default props => (
  <StaticQuery
    query={graphql`
      query departmentsQuery{
		allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/departments/"} }){
		    edges {
		        node {
		          	id
					frontmatter {
			          	title
			          	name
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
		<React.Fragment>
			<div id="departments" className="section">
				<div className="container">
					<div className="title">
						<h2 className="underlined">Departments</h2>
					</div>
					<div className="contents">
						<div className="row">
							{getContents(data)}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)}
  />
);

function getContents(data){
	const content = [];
	data.allMarkdownRemark.edges.forEach(function(item,i){
		content.push(
			<div className="col s12 m6 l4" key={"D"+i}>
				<div className="department" key={"D"+i}>
					<div className="image" key={"D1"+i}>
						<Img fluid={item.node.frontmatter.image.childImageSharp.fluid} key={"D11"+i} alt=""/>
					</div>
					<div className="description" key={"D2"+i}>
						<span className="v-center" key={"D22"+i}></span>
						<p className="font-2 middle" key={"D23"+i}><b key={"D23"+i}>{item.node.frontmatter.title}</b></p>
					</div>
					<a className="overlay-link" href={"/departments/"+item.node.frontmatter.name} key={"D21"+i}>{item.node.frontmatter.title}</a>
				</div>
			</div>
		);
	})
	return content;
}
