import React from "react"
import {Helmet} from "react-helmet"
import Navbar from "./navbar"
import { withPrefix } from 'gatsby'

export default setHeader

function setHeader(props){
	return(
		<React.Fragment>
			<Helmet>
				<title>{props.title}</title>
				<meta name="keywords" content="CEK,kidangoor,College of Engineering,College,Engineering"/>
				<script src={withPrefix('/js/script.js')}></script>
			</Helmet>

			<Navbar/>

		</React.Fragment>
	)
}
