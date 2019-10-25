import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Link from "./link";
import '../style/footer.less';

export default () => {
    const baseData = useStaticQuery(graphql`
        query footerQuery {
            allBaseYaml {
                edges {
                    node {
                        id
                        data {
                            quickLinks {
                                col1 {
                                    name
                                    url
                                }
                                col2 {
                                    name
                                    url
                                }
                                col3 {
                                    name
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <React.Fragment>
            <div id="footer" className="section">
                <div className="container">
                    <div className="title">
                        <h2>Quick Links</h2>
                    </div>
                    <div className="contents">
                        <div className="row">
                            <div className="col s12 m4">
                                <ul>
                                    {getContents(
                                        baseData.allBaseYaml.edges[0].node.data
                                            .quickLinks.col1
                                    )}
                                </ul>
                            </div>
                            <div className="col s12 m4">
                                <ul>
                                    {getContents(
                                        baseData.allBaseYaml.edges[0].node.data
                                            .quickLinks.col2
                                    )}
                                </ul>
                            </div>
                            <div className="col s12 m4">
                                <ul>
                                    {getContents(
                                        baseData.allBaseYaml.edges[0].node.data
                                            .quickLinks.col3
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="row" />
                    </div>
                </div>
            </div>
            <div id="copyright">
                <p>Copyright &copy; ce-kgr.org</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: '<!-- This website was created by students of CEK during the year 2019-2020. The team included, Akshay U - S5 CS, Samanyu S Neelson - S7 EI, Akhil M P - S7 CS and Athul C A - S3 CS   -->' }} />
        </React.Fragment>
    );
};

function getContents(data) {
    const content = [];
    if (!data) return;
    data.forEach(function(item, i) {
        content.push(
            <li key={'QL' + i}>
                <Link key={'QL' + i} to={item.url} title={item.name}>
                    {item.name}
                </Link>
            </li>
        );
    });
    return content;
}
