import React from "react"
import { StaticQuery, graphql } from "gatsby"
import marked from "marked"

export default props => (
  <StaticQuery
    query={graphql`
      query NewsQuery{
		allNewsYaml {
     		edges {
       			node {
         			data
       			}
     		}
   		}
      }
    `}
    render={data => (
		<React.Fragment>
			{getAnnouncements(data)}
		</React.Fragment>
	)}
  />
);

function getAnnouncements(data){
	const ann = [];
	data.allNewsYaml.edges.forEach(function(item,i){
		ann.push(<li className="collection-item" key={i}><p key={i} dangerouslySetInnerHTML={{ __html: marked(item.node.data.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></p></li>);
	})
	return ann;
}
