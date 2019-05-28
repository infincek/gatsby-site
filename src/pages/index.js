import React from "react"
import Header from "../components/header"
import Wall from "../components/indexWallInfo"
import Welcome from "../components/indexWelcome"
import Announcements from "../components/announcements"
import News from "../components/news"
import CampusLife from "../components/campus-life"
import Departments from "../components/departments"
import Contact from "../components/contact"
import Footer from "../components/footer"
import {Helmet} from "react-helmet"

export default class props extends React.Component{
	componentDidMount(){

	}
	render(){
		return(
			<React.Fragment>
				<Helmet>
					<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				</Helmet>
				<Header title="CEK"/>
				<Wall/>
				<Welcome/>
				<div id="announcements" className="section">
					<div className="container">
						<div className="title">
							<h2 className="underlined">Announcements and News</h2>
						</div>
						<div className="contents">
							<div className="row">
								<div className="col s12 m6">
									<ul className="collection with-header">
										<li className="collection-header"><h4>Announcements</h4></li>
										<Announcements/>
									</ul>
								</div>
								<div className="col s12 m6">
									<ul className="collection with-header">
										<li className="collection-header"><h4>Latest News</h4></li>
										<News/>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="campus-life" className="section">
					<div className="container">
						<div className="title">
							<h2 className="underlined">Campus Life</h2>
						</div>
						<div className="contents">
							<div className="campus-carousel" id="campus-life-carousel">
								<CampusLife/>
							</div>
						</div>
					</div>
				</div>
				<Departments/>
				<Contact/>
				<Footer/>
			</React.Fragment>
		)

	}

}
