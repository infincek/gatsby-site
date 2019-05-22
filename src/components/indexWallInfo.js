import React from "react"
import { StaticQuery, graphql } from "gatsby"
import marked from "marked"

export default props => (
  	<StaticQuery
	    query={graphql`
			query wallQuery {
	  		  	allBaseYaml {
	  			  	edges {
	  				  	node {
	  					  	id
	  					  	data{
	  						  	carousel{
									image
								}
								announcements
	  					  	}
	  				  	}
	  			  	}
	  		  	}
	  	  	}
	    `}
		render={data => (
			<React.Fragment>
				<div id="wall">
					 <div className="carousel carousel-slider">
						{getCarousel(data)}
					 </div>
				</div>
				<div id="announcements-strip">
					<i className="fa fa-bell ico"></i>
					<div className="strip">
						<ul>
							{getAnnouncements(data)}
						</ul>
					</div>
				</div>
			</React.Fragment>
		)}
	/>
)

function getCarousel(data){
	var c = [];
	data.allBaseYaml.edges[0].node.data.carousel.forEach(function(item,i){
		c.push(<a className="carousel-item" key={"CARO"+i} href="#"><img key={"CARO"+i} src={item.image}/></a>);
	})
	return c;
}

function getAnnouncements(data){
	var c = [];
	data.allBaseYaml.edges[0].node.data.announcements.forEach(function(item,i){
		c.push(<li key={"WAN"+i} dangerouslySetInnerHTML={{ __html: marked(item)}}></li>);
	})
	return c;
}
