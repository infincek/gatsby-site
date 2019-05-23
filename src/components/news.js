import React from "react"
import { StaticQuery, graphql } from "gatsby"
import marked from "marked"
marked.setOptions({
	renderer: new marked.Renderer(),
	pedantic: false,
	gfm: true,
	tables: true,
	breaks: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
  	xhtml: true
});

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
		ann.push(<li className="collection-item" key={i} dangerouslySetInnerHTML={{ __html: marked(item.node.data) }}></li>);
	})
	return ann;
}
