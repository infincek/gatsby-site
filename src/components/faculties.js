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
			<DataCol key={item.node.id} item={item}/>
		);
	})
	return content;
}

function DataCol(props){
	return(
		<div className="col s12 m6 l4 member">
			<div className="box">
				<div className="image">
					<Img fluid={props.item.node.frontmatter.image.childImageSharp.fluid} alt=""/>
				</div>
				<div className="overlay">
					<i className="fa fa-info" aria-hidden="true"></i>
				</div>
				<div className="description">
					<p className="name">{props.item.node.frontmatter.title}</p>
					<p className="subj">{props.item.node.frontmatter.designation}</p>
				</div>
				<a href={props.item.node.fields.slug} className="overlay-link">{props.item.node.fields.slug}</a>
			</div>
		</div>
	);
}
