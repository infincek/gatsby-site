import React from 'react';
import { graphql } from 'gatsby';
import MD from 'gatsby-custom-md';
import Layout from '../components/layout';
import { Row, Col, Fl, Box, Button } from '../components/custom';
import '../style/single-page.less';

const components = {
    row: Row,
    col: Col,
    fl: Fl,
    box: Box,
    btn: Button
}

export default ({ data }) => {
    const post = data.markdownRemark;

    const meta = {
        title: post.frontmatter.title,
        image: post.frontmatter.image,
        description: post.frontmatter.description,
        keywords: post.frontmatter.title
    };

    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>{post.frontmatter.title}</span>
                    </h1>
                </div>
                <div className="contents">
                    <MD components={components} htmlAst={post.htmlAst}/>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            excerpt
            frontmatter {
                title
                image {
                    publicURL
                }
            }
        }
    }
`;
