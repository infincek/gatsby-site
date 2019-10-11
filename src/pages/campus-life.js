import React from 'react';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";


const meta = {
    title: 'Campus Life',
    description:'Campus activities of CEK',
    keywords: 'Campus life, campus, programmes'
};

export default function({data}) {


    const items = [];

    data.allMarkdownRemark.edges.forEach((item,i) => {
      items.push(
        <Card data={item.node} key={item.node.id}/>
      )
    })
    return (
        <Layout meta={meta}>
          <div className="page-contents container">
              <div className="title center">
                  <h1 className="underlined">
                      <span>Campus Life</span>
                  </h1>
              </div>
              <div className="contents">
                  <div className="row">
                    {items}
                  </div>
              </div>
          </div>
        </Layout>
    );
}

const Card = ({data}) => {
  return (
    <div className="col s12 card">
      <div className="image">
        <Img
            fluid={data.frontmatter.image.childImageSharp.fluid}
            alt={data.frontmatter.title}
        />
      </div>
      <div className="description">
        <h3>{data.frontmatter.title}</h3>
        <p>{data.frontmatter.description}</p>
      </div>
      <Link to={data.fields.slug} className="overlay-link" title={data.frontmatter.title}>{data.frontmatter.title}</Link>
    </div>
  )
}

export const query = graphql`
query  {
    allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/campus-life/" } }
    ) {
        edges {
            node {
                id
                frontmatter {
                    title
                    description
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
