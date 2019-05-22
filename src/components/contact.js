import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import marked from "marked"

export default contact


function contact(){
	const baseData = useStaticQuery(graphql`
	    query contactInfoQuery {
			allBaseYaml {
			    edges {
			      	node {
			        	id
			        	data{
			          		phone
			          		fax
							address
							email
			        	}
			      	}
			    }
			}
	    }
	 `);

	return(
		<React.Fragment>
			<div id="contact" className="section">
				<div className="container">
					<div className="title">
						<h2 className="underlined">Contact</h2>
					</div>
					<div className="contents">
						<div className="row">
							<div className="col s12 m7">
								<div className="htmlForm">
									<div className="row">
									   	<div className="input-field col s12">
										 	<input id="name" type="text" className="validate"/>
										 	<label htmlFor="name">Name</label>
									    </div>
										<div className="input-field col s12">
										 	<input id="email" type="text" className="validate"/>
										 	<label htmlFor="email">Email</label>
									    </div>
										<div className="input-field col s12">
										 	<input id="phone" type="text"/>
										 	<label htmlFor="phone">Phone</label>
									    </div>
										<div className="input-field col s12">
										 	<input id="subject" type="text"/>
										 	<label htmlFor="subject">Subject</label>
									    </div>
										<div className="input-field col s12">
											<textarea id="message" className="materialize-textarea"></textarea>
			   								<label htmlFor="message">Message</label>
									    </div>
										<div className="input-field col s12">
											<button type="submit" name="submit" id="submit" className="btn btn-large waves-effect">Send <i className="fa fa-paper-plane"></i></button>
										</div>
									</div>
								</div>
							</div>
							<div className="col s12 m5 infos">
								<p className="info">
									<i className="ico fa fa-map-marker"></i>
									<span className="data" dangerouslySetInnerHTML={{ __html: marked(baseData.allBaseYaml.edges[0].node.data.address.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></span>
								</p>
								<p className="info">
									<i className="ico fa fa-phone"></i>
									<span className="data" dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.phone.join("<br/>")}}></span>
								</p>
								<p className="info">
									<i className="ico fa fa-fax"></i>
									<span className="data" dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.fax}}></span>
								</p>
								<p className="info">
									<i className="ico fa fa-envelope"></i>
									<span className="data"><a href={"mailto:"+baseData.allBaseYaml.edges[0].node.data.email} dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.email}}></a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.586576470994!2d76.620873!3d9.668509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d293a982ceeb%3A0xd62bf193983589fe!2sCollege+of+Engineering%2C+Kidangoor!5e0!3m2!1sen!2sin!4v1515566490896" width="100%" height="450" frameBorder="0"></iframe>
			</div>
		</React.Fragment>
	)
}
