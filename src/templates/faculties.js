import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Img from 'gatsby-image'
import {Helmet} from "react-helmet"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.href;
const origin = globalHistory.location.origin;


export default ({ data }) => {

  const post = data.markdownRemark;

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
				<h2 className="underlined"><span>{post.frontmatter.title}</span></h2>
			</div>
			<div className="contents">
                <div className="row">
                    <div className="col m12 l4">
                        <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title}/>
                    </div>
                    <div className="col m12 l8">
                        <ul className="list no-style properties">
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-building"></i> Department </p>
                                </div>
                                <p className="value">{post.frontmatter.departmentFullName}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-flag"></i> Designation </p>
                                </div>
                                <p className="value">{post.frontmatter.designation}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-calendar"></i> Date of joining </p>
                                </div>
                                <p className="value">{post.frontmatter.dateOfJoining}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-cogs"></i> Experience </p>
                                </div>
                                <div className="value">
                                    <strong>Teaching</strong>
                                    <p className="value">{post.frontmatter.experienceTeaching}</p>
                                </div>
                                <div className="value">
                                    <strong>Industry</strong>
                                    <p className="value">{post.frontmatter.experienceIndustry}</p>
                                </div>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-university"></i> UG & Institution </p>
                                </div>
                                <p className="value">{post.frontmatter.ugAndInstitution.replace(/(?:\r\n|\r|\n)/g, '<br/>')}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-university"></i> PG & Institution </p>
                                </div>
                                <p className="value">{post.frontmatter.pgAndInstitution.replace(/(?:\r\n|\r|\n)/g, '<br/>')}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-book"></i> Subject </p>
                                </div>
                                <p className="value">{post.frontmatter.subject}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-graduation-cap"></i> Ph.D </p>
                                </div>
                                <p className="value">{post.frontmatter.phd}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-cog"></i> Specialization </p>
                                </div>
                                <p className="value">{post.frontmatter.specialization}</p>
                            </li>
							<li>
                                <div className="header">
                                    <p><i className="fa fa-phone"></i> Mobile </p>
                                </div>
                                <p className="value">{post.frontmatter.mobileNumber}</p>
                            </li>
                            <li>
                                <div className="header">
                                    <p><i className="fa fa-bullhorn"></i> Any Other Relevant Details </p>
                                </div>
                                <p className="value">{post.frontmatter.otherData}</p>
                            </li>
                        </ul>
                    </div>
                </div>
				<div className="row" dangerouslySetInnerHTML={{ __html: post.html}}>
				</div>
            </div>
		</div>
	    <Footer/>
	</React.Fragment>
  )
}

export const query = graphql`
  	query($slug: String!) {
	    markdownRemark(fields: { slug: { eq: $slug } }) {
	      	html
			id
	      	frontmatter {
	        	title
				name
				departmentFullName
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
				dateOfJoining
				experienceTeaching
				experienceIndustry
				ugAndInstitution
				pgAndInstitution
				subject
				phd
				specialization
				otherData
				mobileNumber
	      	}
	    }
  	}
`
