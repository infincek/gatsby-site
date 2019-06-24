import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Faculties from "../components/faculties"
import marked from "marked"
import Img from 'gatsby-image'
import {Helmet} from "react-helmet"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.href;
const origin = globalHistory.location.origin;



export default ({ data }) => {
  const post = data.department;

  let metaKeywords = "CEK,College of Engineering,KGR,"+post.frontmatter.title;

  let CollegeImage = post.frontmatter.image;
  if(CollegeImage) CollegeImage = post.frontmatter.image.publicURL;
  else CollegeImage = "";

  return (
	<React.Fragment>
		<Helmet>
			<meta name="description" content={post.excerpt}/>
			<meta name="keywords" content={metaKeywords}/>
			<meta property="og:title" content={post.frontmatter.title+" | CEK"} />
			<meta property="og:type" content="article" />
			<meta property="og:url" content={path} />
			<meta property="og:image" content={origin+CollegeImage} />
		</Helmet>
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
			id
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
					id
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
