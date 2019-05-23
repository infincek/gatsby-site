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
import {withPrefix} from "gatsby"

let $;
let M;
try{
	M = require("materialize-css")
	$ = require("jquery")
}catch(err){
	console.log(err)
}

const owlOptions = {
	items:1,
	nav:true,
	dots:true,
	loop:true,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true
}


export default class props extends React.Component{
	componentDidMount(){
		M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
			fullWidth: true,
			indicators:true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:false
		});

	}
	render(){
		return(
			<React.Fragment>
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
							<div className="carousel carousel-slider" id="campus-life-carousel">
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
