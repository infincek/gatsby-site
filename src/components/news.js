import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import marked from 'marked';

export default class props extends React.Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        allNewsYaml(limit: 5) {
                            edges {
                                node {
                                    data
                                    new
                                    date(formatString: "DD MMMM YYYY")
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <React.Fragment>{getData(data)}</React.Fragment>
                )}
            />
        );
    }
}

function getData(data) {
    const ann = [];
    data.allNewsYaml.edges.forEach(function(item, i) {
        ann.push(
            <ListItem key={"news"+i} data={item.node}/>
        );
    });
    return ann;
}

const ListItem = ({data}) => {
    return(
        <li className="collection-item">
            {data.new &&
                <span className="badge">new</span>
            }
            <div dangerouslySetInnerHTML={{ __html: marked(data.data) }}></div>
            {
                data.date &&
                <span className="date"><i className="fa fa-calendar"></i> {data.date}</span>
            }
        </li>
    )
}
