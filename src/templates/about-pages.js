import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Helmet} from "react-helmet"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.href;
const origin = globalHistory.location.origin;

export default ({ data }) => {
  const post = data.markdownRemark;
  let CollegeImage = post.frontmatter.image;
  if(CollegeImage) CollegeImage = post.frontmatter.image.publicURL;
  else CollegeImage = "";

  let metaKeywords = "CEK,College of Engineering,KGR,"+post.frontmatter.title;

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
		  <div className="contents"  dangerouslySetInnerHTML={{ __html: post.html }}></div>
	  	</div>
	    <Footer/>
	</React.Fragment>
  )
}

export const query = graphql`
  	query($slug: String!) {
	    markdownRemark(fields: { slug: { eq: $slug } }) {
	      	html
			excerpt
	      	frontmatter {
	        	title
				image{
					publicURL
				}
	      	}
	    }
  	}
`
