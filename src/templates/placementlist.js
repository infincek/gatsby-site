import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PlacementList from '../components/placement-list';

const meta = {
    title: 'Placements',
    description: '',
    keywords: 'placements'
};

export default function({data}) {
    let all = data.all.nodes;
    let currentYear = data.currentYear.fields.slug.split("/")[2];

    let currentYearPlacements = all.filter(item =>{
        const year = item.parent.relativePath.split("/")[1];
        return (year === currentYear && item.frontmatter.template === "placement");
    })

    let allYears = all.filter(item =>{
        return item.frontmatter.template === "placementlist";
    })

    allYears.sort((a,b) => (a.fields.slug < b.fields.slug) ? 1 : ((b.fields.slug < a.fields.slug) ? -1 : 0));

    const years = [];

    allYears.forEach((e,i) => {
        const year = e.parent.relativePath.split("/")[1];
        years.push(
            <Link key={e.id+"btn"} to={e.fields.slug} title={e.frontmatter.title} className={"btn"+(year === currentYear ? " active" : "")}>{e.frontmatter.title}</Link>
        )
    })


    return (
        <Layout meta={meta}>
            <div className="section placement">
                <div className="container">
                    <div className="title">
                        <h2 className="underlined">Placements</h2>
                    </div>
                    <div className="contents">
                        <div className="row">
                            <div className="col s12 btns">
                                {years}
                            </div>
                        </div>
                        <div className="row flex">
                            <PlacementList data={currentYearPlacements}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!){
        currentYear:markdownRemark(fields: {slug: {eq: $slug}}) {
            id
            fields{
                slug
            }
        }
        all:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/placement/"}}) {
            nodes {
                id
                frontmatter {
                    title
                    template
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
                parent {
                    ... on File {
                        dir
                        relativePath
                    }
                }
            }
        }
    }
`;
