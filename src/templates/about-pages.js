import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
	<React.Fragment>
	    <Header/>
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
	      	frontmatter {
	        	title
	      	}
	    }
  	}
`
