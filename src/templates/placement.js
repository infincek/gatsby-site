import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import '../style/single-page.less';
import '../style/placement.less';

export default ({ data }) => {
    const post = data.markdownRemark;

    const meta = {
        title: post.frontmatter.title,
        keywords: post.frontmatter.title,
        image: post.frontmatter.logo.publicURL,
        description: post.frontmatter.description
    };

    const selections = [];
    post.frontmatter.selections.forEach((e,i) => {
        selections.push(<PlacementSelection data={e} key={e.name+e.department+i}/>);
    })

    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>{post.frontmatter.title}</span>
                    </h1>
                </div>
                <div className="contents">
                    <div className="row">
                        {selections}
                    </div>
                    <div className="row">
                        <div className="col s12" dangerouslySetInnerHTML={{ __html: post.html}}></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            id
            frontmatter {
                title
                description
                logo {
                    publicURL
                }
                selections{
                    name
                    department
                    image{
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                srcSet
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    }
`;


const PlacementSelection = ({data}) => {
    return (
        <div className="col s12 m6 l4 student">
            <div className="box">
                <div className="image">
                    <Img
                        fluid={
                            data.image.childImageSharp.fluid
                        }
                        alt={data.name}
                    />
                </div>
                <div className="description">
                    <h5 className="name">{data.name}</h5>
                    <p className="dep">
                        {data.department}
                    </p>
                </div>
            </div>
        </div>
    );
}