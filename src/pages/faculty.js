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
    const faculties = [];
    data.faculties.group.forEach((item,i) => {
        faculties.push(
            <Faculties data={item} key={"fac"+i} page={true}/>
        )
    })
    const technical = [];
    data.technical.group.forEach((item,i) => {
        technical.push(
            <Faculties data={item} key={"tech"+i} page={true}/>
        )
    })
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
                        {faculties}
                    </div>
                    <div className="row">
                        <h2>Technical Staff</h2>
                        {technical}
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
            group(field: frontmatter___department) {
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
        technical: allMarkdownRemark(
            filter: {
                frontmatter: { teaching: {eq: false} }
                fileAbsolutePath: { regex: "/faculty/" }
            }
        ) {
            group(field: frontmatter___departmentFullName) {
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