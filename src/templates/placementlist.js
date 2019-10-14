import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import Layout from '../components/layout';
import PlacementList from '../components/placement-list';
import "../style/single-page.less";

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

    const currentlyPlacedStudents = [];

    currentYearPlacements.forEach((cpe) => {
        if(cpe.frontmatter.selections){
            cpe.frontmatter.selections.forEach(item => {
                item.company = {name: cpe.frontmatter.title, url: cpe.fields.slug};
            })
            currentlyPlacedStudents.push(...cpe.frontmatter.selections);
        }
    })

    const listPlacedStudents = [];


    currentlyPlacedStudents.forEach((cpe, cpi) => {
        listPlacedStudents.push(<PlacementSelection data={cpe} key={cpe.name+""+cpi}/>);
    })

    meta.title = data.currentYear.frontmatter.title;

    return (
        <Layout meta={meta}>
            <div className="placement page-contents">
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
                        <div className="row">
                            <div dangerouslySetInnerHTML={{ __html: data.currentYear.html }}/>
                        </div>
                        {listPlacedStudents.length > 0 && 
                            <React.Fragment>
                                <h3 className="p2">Students</h3>
                                <div className="row flex">
                                    {listPlacedStudents}
                                </div>
                            </React.Fragment>
                        }
                        {currentYearPlacements.length > 0 && 
                            <React.Fragment>
                                <h3 className="p2">Companies</h3>
                                <div className="row flex">
                                    <PlacementList data={currentYearPlacements}/>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

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
                    <p className="company">
                        <Link to={data.company.url} title={data.company.name}>{data.company.name}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export const query = graphql`
    query($slug: String!){
        currentYear:markdownRemark(fields: {slug: {eq: $slug}}) {
            id
            html
            frontmatter{
                title
            }
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
