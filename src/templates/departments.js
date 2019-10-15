import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import marked from 'marked';
import MD from 'gatsby-custom-md';
import Faculties from '../components/faculties';
import Layout from '../components/layout';
import { Row, Col, Fl, Box } from '../components/custom';
import '../style/single-page.less';

const components = {
    row: Row,
    col: Col,
    fl: Fl,
    box: Box
}

export default ({ data }) => {
    const post = data.department;

    const meta = {
        title: post.frontmatter.title,
        keywords: post.frontmatter.title,
        image: post.frontmatter.image,
        description: post.frontmatter.description
    };

    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>{post.frontmatter.title}</span>
                    </h1>
                </div>
                <div className="image">
                    <Img
                        fluid={post.frontmatter.banner.childImageSharp.fluid}
                        alt={post.frontmatter.title}
                    />
                </div>
                <div className="contents">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked(
                                post.frontmatter.intro.replace(
                                    /(?:\r\n|\r|\n)/g,
                                    '<br/>'
                                )
                            )
                        }}
                    />
                    <div className="row">
                        <div className="col s12 m6">
                            <p className="font-2">
                                <b>Vision</b>
                            </p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marked(
                                        post.frontmatter.vision.replace(
                                            /(?:\r\n|\r|\n)/g,
                                            '<br/>'
                                        )
                                    )
                                }}
                            />
                        </div>
                        <div className="col s12 m6">
                            <p className="font-2">
                                <b>Mission</b>
                            </p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marked(
                                        post.frontmatter.mission.replace(
                                            /(?:\r\n|\r|\n)/g,
                                            '<br/>'
                                        )
                                    )
                                }}
                            />
                        </div>
                    </div>
                    {data.hod.edges.length > 0 &&
                        <div>
                            <h3>Head of the Department</h3>
                            <Faculties data={data.hod} />
                        </div>
                    }
                    <div>
                        <MD htmlAst={post.htmlAst} components={components}/>
                    </div>
                    <h3>Faculty</h3>
                    <Faculties data={data.faculties}/>
                    <h3>Technical Staffs</h3>
                    <Faculties data={data.technical}/>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`

query($slug: String!, $name: String) {
    department: markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        htmlAst
        id
        frontmatter {
            title
            description
            banner {
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
    faculties: allMarkdownRemark(
        filter: {
            frontmatter: { department: { eq: $name }, hod: {eq: false}, teaching: { ne: false} }
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
            frontmatter: { department: { eq: $name }, teaching: {eq: false} }
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
    hod: allMarkdownRemark(
        filter: {
            frontmatter: { department: { eq: $name }, hod: {eq: true} }
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
}
`;
