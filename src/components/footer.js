import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
        </React.Fragment>
    );
};

function getContents(data) {
    const content = [];
    if (!data) return;
    data.forEach(function(item, i) {
        content.push(
            <li key={'QL' + i}>
                <a key={'QL' + i} href={item.url}>
                    {item.name}
                </a>
            </li>
        );
    });
    return content;
}
