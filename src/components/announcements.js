import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import marked from 'marked';

export default class props extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query AnnouncementsQuery {
                        allAnnouncementsYaml {
                            edges {
                                node {
                                    data
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <React.Fragment>{getAnnouncements(data)}</React.Fragment>
                )}
            />
        );
    }
}

function getAnnouncements(data) {
    const ann = [];
    data.allAnnouncementsYaml.edges.forEach(function(item, i) {
        ann.push(
            <li
                className="collection-item"
                key={i}
                dangerouslySetInnerHTML={{ __html: marked(item.node.data) }}
            />
        );
    });
    return ann;
}
