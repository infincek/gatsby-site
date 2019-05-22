import React from "react"
import { StaticQuery, graphql } from "gatsby"
import marked from "marked"

export default props => (
  <StaticQuery
    query={graphql`
      query campusLifeQuery{
		allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/campus-life/"} }){
		    edges {
		        node {
		          	id
					frontmatter {
			          	title
			          	name
			          	description
						image
			        }
		        }
		    }
		}
      }
    `}
    render={data => (
		<React.Fragment>
			{getContents(data)}
		</React.Fragment>
	)}
  />
);

function getContents(data){
	const content = [];
	data.allMarkdownRemark.edges.forEach(function(item,i){
		content.push(<div className="item" key={"CL-"+i}>
			<div className="row" key={"CLP-"+i}>
				<div className="col s12 m6 l5" key={"CLC1-"+i}>
					<img src={item.node.frontmatter.image} alt={item.node.frontmatter.title} key={"CLCD1-"+i}/>
				</div>
				<div className="col s12 m6 l7" key={"CLC2-"+i}>
					<h3 key={"CLCD2-"+i}>{item.node.frontmatter.title}</h3>
					<p key={"CLCD3-"+i}>{item.node.frontmatter.description}</p>
					<a key={"CLCD4-"+i} className="btn btn-medium waves-effect" href={item.node.frontmatter.name}>Know More</a>
				</div>
			</div>
		</div>);
	})
	return content;
}
