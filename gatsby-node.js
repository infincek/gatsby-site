const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const webpack = require(`webpack`);


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `data` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
        if (node.frontmatter.name) {
            createNodeField({
                node,
                name: `name`,
                value: node.frontmatter.name
            });
        }
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                            name
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(
                    './src/templates/' + node.frontmatter.template + '.js'
                ),
                context: {
                    name: node.fields.name,
                    slug: node.fields.slug
                }
            });
        });
    });
};
