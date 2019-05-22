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

export default props => (
	<React.Fragment>
		<Helmet>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
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
					<div className="owl-carousel owl-theme" id="campus-life-carousel">
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
