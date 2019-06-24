import React from "react"
import {Helmet} from "react-helmet"
import Navbar from "./navbar"
let $;
let M;
try{
	M = require("materialize-css")
	$ = require("jquery")
}catch(err){
	console.log(err)
}

export default class setHeader extends React.Component{
	componentDidMount(){
		M.Sidenav.init(document.querySelectorAll('.sidenav'));

		$("#mobile a[data-target]").each(function(){
			var li = $(this).parent();
			$(this).removeClass("dropdown-trigger")
			var target = $(this).attr("data-target");
			var dd = $("#"+target).clone();
			dd.removeAttr("id");
			li.append(dd);
			$(this).removeAttr("data-target");
			$(this).click(function(e){
				e.preventDefault();
				li.find(".dropdown-content").slideToggle(150);
			})
		})

		M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'),{
 			hover: true,
 			closeOnClick: true,
 			coverTrigger: false,
 			constrainWidth: false
 		});

		var navTop = $("nav").offset().top;

		$(window).scroll(function(){
			if($(this).scrollTop() >= navTop){
				$("nav").addClass("fixed");
			}else{
				$("nav").removeClass("fixed");
			}
		})

	}
	render(){
		const {location,title}=this.props
		return(
			<React.Fragment>
				<Helmet>
					<title>{this.props.title}</title>
					<meta name="keywords" content="CEK,kidangoor,College of Engineering,College,Engineering"/>
				</Helmet>
				<Navbar/>
			</React.Fragment>
		)
	}

}
