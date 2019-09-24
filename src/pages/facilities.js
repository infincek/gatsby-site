import React from "react";
import { graphql, Link } from"gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import '../style/single-page.less';
import '../style/facilities.less';


const meta = {
    title: "Facilities",
    description: "Facilities available at College of Engineering Kidangoor, Kottayam"
}

export default ({ data }) => {
    const facilities = [];
    data.allMarkdownRemark.edges.forEach((e,i) => {
        facilities.push(
            <Facility data={e.node}/>
        )
    })
    return(
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>Facilities</span>
                    </h1>
                </div>
                <div classname="contents">
                    <div className="row flex">
                        {facilities}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const Facility = ({data}) => {
    return (
        <div className="col s12 m6 l4 facility-item">
            <div className="box">
                <div className="image">
                    <Img fluid={data.frontmatter.image.childImageSharp.fluid} title={data.frontmatter.title}/>
                </div>
                <div className="description">
                    <p>{data.frontmatter.title}</p>
                </div>
                <Link to={data.fields.slug} className="overlay-link" title={data.frontmatter.title}>{data.frontmatter.title}</Link>
            </div>
        </div>
    )
}

export const query = graphql`
    query{
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/facilities/" }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    srcSet
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`