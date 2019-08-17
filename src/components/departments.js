import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import style from "../style/departments.module.less"

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
					fields{
						slug
					}
		        }
		    }
		}
      }
    `}
    render={data => (
		<React.Fragment>
			<div id="departments" className={"section "+style.departments}>
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
			<DataCol key={item.node.id} item={item}/>
		);
	})
	return content;
}

function DataCol(props){
	return(
		<div className="col s12 m6 l4">
			<div className="department">
				<div className="image">
					<Img fluid={props.item.node.frontmatter.image.childImageSharp.fluid} alt=""/>
				</div>
				<div className="description">
					<span className="v-center"></span>
					<p className="font-2 middle"><b>{props.item.node.frontmatter.title}</b></p>
				</div>
				<Link className="overlay-link" title={props.item.node.frontmatter.title} to={props.item.node.fields.slug}>{props.item.node.frontmatter.title}</Link>
			</div>
		</div>
	);
}
