import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Departments from "../components/departments"
import {Helmet} from "react-helmet"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.href;
const origin = globalHistory.location.origin;

const meta = {
	title: "Departments",
	description: "College of Engineering Kidangoor has six departments namely Civil, Electronics and Instrumentation, Computer Science and Technology, Information Technology, Electronics and Communication and Electronics and Electrical Engineering",
	keywords: "Departments"
}

export default function(){
	return(
		<Layout meta={meta}>
			<Departments/>
		</Layout>
	)
}
