import React from "react";
import { graphql } from 'gatsby';
import Faculties from "../components/faculties.js";
import Layout from "../components/layout.js";


export default ({ data }) => {
    const post = data.allMarkdownRemark;

    const meta = {
        title: "HODs",
        keywords: "HOD, Head of the Departments",
        description: "HODs of College of Engineering Kidangoor"
    };

    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>Head of Departments</span>
                    </h1>
                </div>
                <div className="contents">
                    <Faculties data={post}/>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query{
        allMarkdownRemark(
        filter: {
            frontmatter: { hod: { eq: true  }}
            fileAbsolutePath: { regex: "/faculty/" }
        }
    ) {
        edges {
            node {
                id
                frontmatter {
                    title
                    name
                    hod
                    image {
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
}`;
