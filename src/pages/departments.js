import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Departments from "../components/departments"

export default function(){
	return(
		<React.Fragment>
			<Header title="Departments"/>
			<Departments/>
			<Footer/>
		</React.Fragment>
	)
}
