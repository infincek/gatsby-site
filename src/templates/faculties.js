import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import '../style/single-page.less';

export default ({ data }) => {
    const post = data.markdownRemark;

    const meta = {
        title: post.frontmatter.title,
        image: post.frontmatter.image.publicURL,
        keywords: post.frontmatter.title
    };

    return (
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h2 className="underlined">
                        <span>{post.frontmatter.title}</span>
                    </h2>
                </div>
                <div className="contents">
                    <div className="row">
                        <div className="col m4 s12 avatar-image">
                            <Img
                                fluid={
                                    post.frontmatter.image.childImageSharp.fluid
                                }
                                alt={post.frontmatter.title}
                            />
                        </div>
                        <div className="col s12 m8">
                            <ul className="list properties">
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-building" />
                                            Department
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.departmentFullName}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-flag" />
                                            Designation
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.designation}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-calendar" />
                                            Date of joining
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.dateOfJoining}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-cogs" />
                                            Experience
                                        </p>
                                    </div>
                                    <div className="value">
                                        <strong>Teaching</strong>
                                        <p className="value">
                                            {
                                                post.frontmatter
                                                    .experienceTeaching
                                            }
                                        </p>
                                    </div>
                                    <div className="value">
                                        <strong>Industry</strong>
                                        <p className="value">
                                            {
                                                post.frontmatter
                                                    .experienceIndustry
                                            }
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-university" />
                                            UG & Institution
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.ugAndInstitution.replace(
                                            /(?:\r\n|\r|\n)/g,
                                            '<br/>'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-university" />
                                            PG & Institution
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.pgAndInstitution.replace(
                                            /(?:\r\n|\r|\n)/g,
                                            '<br/>'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-book" />
                                            Subject
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.subject}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-graduation-cap" />
                                            Ph.D
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.phd}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-cog" />
                                            Specialization
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.specialization}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-phone" />
                                            Mobile
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.mobileNumber}
                                    </p>
                                </li>
                                <li>
                                    <div className="header">
                                        <p>
                                            <i className="fa fa-bullhorn" />
                                            Any Other Relevant Details
                                        </p>
                                    </div>
                                    <p className="value">
                                        {post.frontmatter.otherData}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="row"
                        dangerouslySetInnerHTML={{
                            __html: post.html
                        }}
                    />
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
                dateOfJoining
                experienceTeaching
                experienceIndustry
                ugAndInstitution
                pgAndInstitution
                subject
                phd
                specialization
                otherData
                mobileNumber
            }
        }
    }
`;
