import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { globalHistory } from "@reach/router"


const path = globalHistory.location.href;
const origin = globalHistory.location.origin;

console.log(globalHistory);

export default function(){
	return(
		<React.Fragment>
			<Header title="404 | CEK"/>
			<div className="container center" style={{ padding: "100px 0"}}>
				<div className="title">
					<h2 className="underlined" style={{ fontSize: '5em' }}>404</h2>
				</div>
				<div className="contents">
					<p>Oops! That page doesn't exist.</p>
					<p>The page you are looking for has been removed or doesn't exist.</p>
				</div>
			</div>
			<Footer/>
		</React.Fragment>
	);
}
