import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Faculties from "../components/faculties"
import marked from "marked"
import Img from 'gatsby-image'

export default ({ data }) => {
  const post = data.department;
  return (
	<React.Fragment>
	    <Header title={post.frontmatter.title}/>
		<div className="page-contents container">
		  	<div className="title center">
			  	<h1 className="underlined"><span>{post.frontmatter.title}</span></h1>
			</div>
			<div className="image">
	          	<Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title}/>
	        </div>
		  	<div className="contents">
				<div dangerouslySetInnerHTML={{ __html: marked(post.frontmatter.intro.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
				<div className="row">
					<div className="col s12 m6">
						<p className="font-2"><b>Mission</b></p>
						<div dangerouslySetInnerHTML={{ __html: marked(post.frontmatter.mission.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
					</div>
					<div className="col s12 m6">
						<p className="font-2"><b>Vision</b></p>
						<div dangerouslySetInnerHTML={{ __html: marked(post.frontmatter.vision.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
					</div>
				</div>
				<h3>Head of the Department</h3>
				<Faculties data={data.faculties} hod="true"/>
		  		<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
				<h3>Faculties</h3>
				<Faculties data={data.faculties} hod="false"/>
			</div>
	  	</div>
	    <Footer/>
	</React.Fragment>
  )
}

export const query = graphql`
  	query($slug: String!, $name: String) {
	    department: markdownRemark(fields: { slug: { eq: $slug } }) {
	      	html
	      	frontmatter {
	        	title
				image{
					publicURL
					childImageSharp {
						fluid(maxWidth: 1000) {
						  srcSet
						  ...GatsbyImageSharpFluid_tracedSVG
						}
					 }
				}
				intro
				mission
				vision
	      	}
	    }
		faculties: allMarkdownRemark (filter:{
			frontmatter:{
				department:{
					eq: $name
				}
			},
			fileAbsolutePath: {
				regex : "\/faculties/"
			}
		})
		{
			edges {
				node {
					frontmatter{
						title
						name
						hod
						image{
							publicURL
							childImageSharp {
				                fluid(maxWidth: 1000) {
				                  srcSet
				                  ...GatsbyImageSharpFluid_tracedSVG
				                }
				             }
						}
						designation
					}
					fields {
						slug
					}
				}
			}
		}
  	}
`
