import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Faculties from "../components/faculties";


const meta = {
    title: "Faculty",
    keywords: "Faculty, hod, teaching, non teachings",
    description: "All faculty of College of Engineering Kidangoor"
};

export default ({data}) => {
    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>Faculty</span>
                    </h1>
                </div>
                <div className="contents">
                    <div className="row">
                        <h2>HODs</h2>
                        <Faculties data={data.hod} page={true}/>
                    </div>
                    <div className="row">
                        <h2>Teaching</h2>
                        <Faculties data={data.faculties} page={true}/>
                    </div>
                    <div className="row">
                        <h2>Technical Staff</h2>
                        <Faculties data={data.technical} page={true}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query{
        faculties: allMarkdownRemark(
            filter: {
                frontmatter: {  hod: {eq: false} teaching: { ne: false} }
                fileAbsolutePath: { regex: "/faculty/" }
            },
            sort: {fields: frontmatter___position}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        name
                        hod
                        departmentFullName
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
        technical: allMarkdownRemark(
            filter: {
                frontmatter: { teaching: {eq: false} }
                fileAbsolutePath: { regex: "/faculty/" }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        name
                        departmentFullName
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
        hod: allMarkdownRemark(
            filter: {
                frontmatter: { hod: {eq: true} }
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
                        departmentFullName
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
    }
`