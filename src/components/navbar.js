import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import marked from "marked"
import logo from "../assets/logo.png"
import mobLogo from "../assets/moblogo.png"

export default navbar

function navbar(){

	const baseData = useStaticQuery(graphql`
	    query contactInfoNavbarQuery {
			allBaseYaml {
			    edges {
			      	node {
			        	id
			        	data{
			          		phone
							address
							email
			        	}
			      	}
			    }
			}
	    }
	 `);

	var links = [
		{
			name:"Home",
			link:"/"
		},
		{
			name:"About Us",
			link:"/about",
			class:"dropdown-trigger",
			data_target:"about-dropdown"
		},
		{
			name:"Admission 2019-20",
			link:"/admission"
		},
		{
			name:"Academics",
			link:"/academics",
			class:"dropdown-trigger",
			data_target:"academics-dropdown"
		},
		{
			name:"Departments",
			link:"/departments",
			class:"dropdown-trigger",
			data_target:"departments-dropdown"
		},
		{
			name:"Facilities",
			link:"/facilities",
			class:"dropdown-trigger",
			data_target:"facilities-dropdown"
		},
		{
			name:"Placement",
			link:"/placement"
		},
		{
			name:"Contact",
			link:"/contact"
		}
	];

	var aboutDropdown = [
		{
			name:"The College",
			link:"/about/the-college"
		},
		{
			name:"The Principal",
			link:"/about/the-principal"
		},
		{
			name:"Head of the Departments",
			link:"/about/head-of-departments"
		}
	];

	var academicsDropdown = [
		{
			name:"UG Programme",
			link:"/ug-programme"
		},
		{
			name:"PG Programme",
			link:"/pg-programme"
		},
		{
			name:"Syllabus",
			link:"/syllabus"
		},
		{
			name:"Research",
			link:"/research"
		}
	];
	var departmentsDropdown = [
		{
			name:"Civil Engineering",
			link:"/departments/civil-engineering"
		},
		{
			name:"Electrical Engineering",
			link:"/departments/electrical-engineering"
		},
		{
			name:"Electronics & instrumentation",
			link:"/departments/electronics-and-instrumentation"
		},
		{
			name:"Electronics & Communication",
			link:"/departments/electronics-and-communication"
		},
		{
			name:"Computer Science",
			link:"/departments/computer-science-and-engineering"
		},
		{
			name:"Information Technology",
			link:"/departments/information-technology"
		},
		{
			name:"Humanities and Science",
			link:"/departments/humanities-and-science"
		}
	];

	var facilitiesDropdown = [
		{
			name:"Central Computer Facility",
			link:"/central-computer-facility"
		},
		{
			name:"Library",
			link:"/library"
		},
		{
			name:"Office",
			link:"/office"
		},
		{
			name:"Other",
			link:"/other"
		}
	];


	function GenerateNavLinks(props){
		var items = props.items;
		const listItems = items.map((item,i) =>
		    <li key={i}><a key={i} href={item.link} {...(item.class ? {className: item.class} : {})} {...(item.data_target ? {"data-target": item.data_target} : {})}>{item.name}</a></li>
		);
		return listItems;
	}

	return (

		<div id="header">
			<div className="container-fluid">
				<div className="top  hide-on-med-and-down">
					<div className="row">
						<div className="col logo item s12 m4">
							<a href="/">
								<img src={logo} alt="College of Engineering Kidangoor"/>
							</a>
						</div>
						<div className="col ph item s6 offset-m2 m2">
							<i className="fa fa-phone"></i>
							<div>
								<div className="prop">Phone</div>
								<div dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.phone.join("<br/>")}}></div>
							</div>
						</div>
						<div className="col address item s6 m2">
							<i className="fa fa-map-marker"></i>
							<div>
								<div className="prop">Address</div>
								<div dangerouslySetInnerHTML={{ __html: marked(baseData.allBaseYaml.edges[0].node.data.address.replace(/(?:\r\n|\r|\n)/g, '<br/>'))}}></div>
							</div>
						</div>
						<div className="col address item s6 m2">
							<i className="fa fa-envelope"></i>
							<div>
								<div className="prop">Mail</div>
								<div><a href={"mailto:"+baseData.allBaseYaml.edges[0].node.data.email} dangerouslySetInnerHTML={{ __html: baseData.allBaseYaml.edges[0].node.data.email}}></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav className="nav-center green accent-4">
				<div className="nav-wrapper">
					<div className="container-fluid">
						<a href="/" className="center brand-logo hide-on-large-only"><img src={mobLogo} alt="CEK" height="50"/></a>
						<a href="#" data-target="mobile" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
						<ul id="nav-mobile" className="hide-on-med-and-down">
							<GenerateNavLinks items={links}/>
						</ul>
					</div>
				</div>
			</nav>
			<ul id="about-dropdown" className="dropdown-content">
				<GenerateNavLinks items={aboutDropdown}/>
			</ul>
			<ul id="academics-dropdown" className="dropdown-content">
				<GenerateNavLinks items={academicsDropdown}/>
			</ul>
			<ul id="departments-dropdown" className="dropdown-content">
				<GenerateNavLinks items={departmentsDropdown}/>
			</ul>
			<ul id="facilities-dropdown" className="dropdown-content">
				<GenerateNavLinks items={facilitiesDropdown}/>
			</ul>
			<ul className="sidenav" id="mobile">
				<li className="user-view"><a href="/"><img src={"/images/logo.png"} alt="College of Engineering Kidangoor"/></a></li>
				<li><div className="divider"></div></li>
				<GenerateNavLinks items={links}/>
				<li><div className="divider"></div></li>
				<li><a className="subheader">Phone</a></li>
				<li><p><span>+91-48 22-256 056</span><span>+9188255056</span></p></li>
				<li><a className="subheader">Address</a></li>
				<li><p>KIDANGOOR SOUTH P.O <br/>	KOTTAYAM – 686 583</p></li>
				<li><a className="subheader">Mail</a></li>
				<li><p><a href="mailto:cekcape@gmail.com">cekcape@gmail.com</a></p></li>
			</ul>
		</div>

	)

}
