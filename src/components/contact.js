import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import marked from "marked"
import "../style/contact.less"

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
											<label htmlFor="name">Name *</label>
										 	<input id="name" type="text" className="validate"/>
									    </div>
										<div className="input-field col s12">
											<label htmlFor="email">Email *</label>
										 	<input id="email" type="email" className="validate"/>
									    </div>
										<div className="input-field col s12">
											<label htmlFor="phone">Phone</label>
										 	<input id="phone" type="number"/>
									    </div>
										<div className="input-field col s12">
											<label htmlFor="subject">Subject</label>
										 	<input id="subject" type="text"/>
									    </div>
										<div className="input-field col s12">
											<label htmlFor="message">Message *</label>
											<textarea rows="4" id="message"></textarea>
									    </div>
										<div className="input-field col s12">
											<button type="submit" name="submit" id="submit" className="btn">Send <i className="fa fa-paper-plane"></i></button>
										</div>
									</div>
								</div>
							</div>
							<div className="col s12 m5 infos">
								<div className="info">
									<i className="ico fa fa-map-marker"></i>
									<div className="data" dangerouslySetInnerHTML={{ __html: marked(baseData.allBaseYaml.edges[0].node.data.address.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
								</div>
								<div className="info">
									<i className="ico fa fa-phone"></i>
									<div className="data" dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.phone.join("<br/>")}}></div>
								</div>
								<div className="info">
									<i className="ico fa fa-fax"></i>
									<div className="data" dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.fax}}></div>
								</div>
								<div className="info">
									<i className="ico fa fa-envelope"></i>
									<div className="data"><a href={"mailto:"+baseData.allBaseYaml.edges[0].node.data.email} dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.email}}></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.586576470994!2d76.620873!3d9.668509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d293a982ceeb%3A0xd62bf193983589fe!2sCollege+of+Engineering%2C+Kidangoor!5e0!3m2!1sen!2sin!4v1515566490896" width="100%" height="450" frameBorder="0" title="map"></iframe>
			</div>
		</React.Fragment>
	)
}
