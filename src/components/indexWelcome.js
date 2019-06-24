import React from "react"
import { StaticQuery, graphql } from "gatsby"
import marked from "marked"
import {Helmet} from "react-helmet"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.href;
const origin = globalHistory.location.origin;


export default props => (
  <StaticQuery
    query={graphql`
		query welcomeQuery {
  		  	allBaseYaml {
  			  	edges {
  				  	node {
  					  	id
  					  	data{
							image{
								publicURL
							}
  						  	welcomeMessage
  						  	mission
  						  	qualityObjectives
  						  	vision
							qualityPolicy
  					  	}
  				  	}
  			  	}
  		  	}
  	  	}
    `}
    render={data => (
		<React.Fragment>
			<Helmet>
				<meta name="description" content={data.allBaseYaml.edges[0].node.data.welcomeMessage}/>
				<meta name="keywords" content="CEK,College of Engineering,Kidangoor,KGR"/>
				<meta property="og:title" content="CEK" />
				<meta property="og:type" content="article" />
				<meta property="og:url" content={path} />
				<meta property="og:image" content={origin+data.allBaseYaml.edges[0].node.data.image.publicURL} />
			</Helmet>
			<div id="welcome" className="section">
				<div className="container">
					<div className="title">
						<h2 className="underlined">Welcome</h2>
					</div>
					<div className="contents allow-list-style">
						<div className="row">
							<div className="col s12" dangerouslySetInnerHTML={{ __html: marked(data.allBaseYaml.edges[0].node.data.welcomeMessage.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
							<div className="col s12 m6">
								<p className="font-2"><b>Mission</b></p>
								<div dangerouslySetInnerHTML={{ __html: marked(data.allBaseYaml.edges[0].node.data.mission.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
								<p className="font-2"><b>Quality Objectives of Institution.</b></p>
								<div dangerouslySetInnerHTML={{ __html: marked(data.allBaseYaml.edges[0].node.data.qualityObjectives)}}></div>
							</div>
							<div className="col s12 m6">
								<p className="font-2"><b>Vision</b></p>
								<div dangerouslySetInnerHTML={{ __html: marked(data.allBaseYaml.edges[0].node.data.vision.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
								<p className="font-2"><b>Quality Policy of Institution</b></p>
								<div  dangerouslySetInnerHTML={{ __html: marked(data.allBaseYaml.edges[0].node.data.qualityPolicy.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)}
  />
);
