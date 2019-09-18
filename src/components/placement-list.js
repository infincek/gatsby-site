import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import "../style/placement.less";

export default () => {
    const query = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/placement/" } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            logo {
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
    `);
    const items = [];
    query.allMarkdownRemark.edges.forEach((e,i) => {
        items.push(
            <Item data={e} key={e.node.id}/>
        )
    })

    return items;
}

const Item = (props) => {
    return(
        <div className="col s12 m6 l4 placement-item">
            <div className="box">
                <div className="image">
                    <Img
                        fluid={
                            props.data.node.frontmatter.logo.childImageSharp
                                .fluid
                        }
                        alt=""
                    />
                </div>
                <div className="description">
                    <span className="v-center" />
                    <p className="font-2 middle">
                        <b>{props.data.node.frontmatter.title}</b>
                    </p>
                </div>
                <Link
                    className="overlay-link"
                    title={props.data.node.frontmatter.title}
                    to={props.data.node.fields.slug}
                >
                    {props.data.node.frontmatter.title}
                </Link>
            </div>
        </div>
    )
}