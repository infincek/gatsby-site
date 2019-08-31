import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../style/single-page.less';

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
                <div
                    className="contents"
                    dangerouslySetInnerHTML={{
                        __html: post.html
                    }}
                />
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
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
