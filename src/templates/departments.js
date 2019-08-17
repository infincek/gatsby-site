import React from "react"
import {graphql} from "gatsby"
import Img from 'gatsby-image'
import {Helmet} from "react-helmet"
import marked from "marked"
import {globalHistory} from "@reach/router"
import Faculties from "../components/faculties"
import Layout from "../components/layout"
import "../style/single-page.less"

export default({data}) => {
    const post = data.department;
    let metaKeywords = post.frontmatter.title;

    const meta = {
        title: post.frontmatter.title,
        keywords: post.frontmatter.title,
        image: post.frontmatter.image,
        description: post.frontmatter.description
    }

    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>{post.frontmatter.title}</span>
                    </h1>
                </div>
                <div className="image">
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title}/>
                </div>
                <div className="contents">
                    <div dangerouslySetInnerHTML={{
                            __html: marked(post.frontmatter.intro.replace(/(?:\r\n|\r|\n)/g, '<br/>'))
                        }}></div>
                    <div className="row">
                        <div className="col s12 m6">
                            <p className="font-2">
                                <b>Mission</b>
                            </p>
                            <div dangerouslySetInnerHTML={{
                                    __html: marked(post.frontmatter.mission.replace(/(?:\r\n|\r|\n)/g, '<br/>'))
                                }}></div>
                        </div>
                        <div className="col s12 m6">
                            <p className="font-2">
                                <b>Vision</b>
                            </p>
                            <div dangerouslySetInnerHTML={{
                                    __html: marked(post.frontmatter.vision.replace(/(?:\r\n|\r|\n)/g, '<br/>'))
                                }}></div>
                        </div>
                    </div>
                    <h3>Head of the Department</h3>
                    <Faculties data={data.faculties} hod="true"/>
                    <div dangerouslySetInnerHTML={{
                            __html: post.html
                        }}></div>
                    <h3>Faculties</h3>
                    <Faculties data={data.faculties} hod="false"/>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql `
  	query($slug: String!, $name: String) {
	    department: markdownRemark(fields: { slug: { eq: $slug } }) {
	      	html
			id
	      	frontmatter {
	        	title
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
