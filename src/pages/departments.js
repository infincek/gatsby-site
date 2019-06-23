import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Departments from "../components/departments"
import CollegeImage from "../assets/college.jpg"
import {Helmet} from "react-helmet"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.href;
const origin = globalHistory.location.origin;

export default function(){
	return(
		<React.Fragment>
			<Helmet>
				<meta name="description" content="College of Engineering Kidangoor has six departments, namely Civil, Electronics and Instrumentation, Computer Science and Technology, Information Technology, Electronics and Communication, Electronics and Electrical Engineering"/>
				<meta name="keywords" content="CEK,College of Engineering,Kidangoor,KGR,departments"/>
				<meta property="og:title" content="Departments | CEK" />
				<meta property="og:type" content="article" />
				<meta property="og:url" content={path} />
				<meta property="og:image" content={origin+CollegeImage} />
			</Helmet>
			<Header title="Departments"/>
			<Departments/>
			<Footer/>
		</React.Fragment>
	)
}
