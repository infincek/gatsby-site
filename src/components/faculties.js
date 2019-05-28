import React from "react"
import Img from 'gatsby-image'
export default function(props){
	return(
		<React.Fragment>
			<div className="row faculty-members">
				{getContents(props)}
			</div>
		</React.Fragment>
	)
}

function getContents(props){
	const content = [];
	var edges = [];
	var hod = props.hod === "true";
	if(hod){
		var h = props.data.edges.find(obj => {
			return obj.node.frontmatter.hod;
		})
		if(h)
			edges.push(props.data.edges.find(obj => {
				return obj.node.frontmatter.hod;
			}))
	}else{
		edges = props.data.edges
	}
	edges.forEach(function(item,i){
		if(!hod && item.node.frontmatter.hod) return;
		content.push(
			<div className="col s12 m6 l4 member" key={"F"+i}>
				<div className="box" key={"F"+i}>
					<div className="image" key={"FC1"+i}>
						<Img fluid={item.node.frontmatter.image.childImageSharp.fluid} key={"FC1C"+i} alt=""/>
					</div>
					<div className="overlay" key={"FC2"+i}>
						<i className="fa fa-info" key={"FC2C"+i} aria-hidden="true"></i>
					</div>
					<div className="description" key={"FC3"+i}>
						<p className="name" key={"FC3C1"+i}>{item.node.frontmatter.title}</p>
						<p className="subj" key={"FC3C3"+i}>{item.node.frontmatter.designation}</p>
					</div>
					<a href={item.node.fields.slug} key={"FC4"+i} className="overlay-link">{item.node.fields.slug}</a>
				</div>
			</div>
		);
	})
	return content;
}
