/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "College of Engineering, Kidangoor",
        logo: "/images/logo.png",
        mobLogo: "/images/moblogo.png",
        description: " College of Engineering, Kidangoor (CEK), Kottayam is one among the premier institutions in the state. The college is governed by the Co-operative Academy of Professional Education established by the Government of Kerala. The admissions are based on the rank obtained by the students in the State Entrance examinations and functioning of the college is according to the rules and regulations formulated by the Government of Kerala. Now the institution is glistening with outstanding records in both academic and extracurricular fields backed by excellent faculty and full-fledged facilities.",
        navLinks: [
            {
    			name:"Home",
    			link:"/"
    		},
    		{
    			name:"About Us",
    			link:"/about",
                children: [
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
                ]
    		},
    		{
    			name:"Admission 2019-20",
    			link:"/admission"
    		},
    		{
    			name:"Academics",
    			link:"/academics",
    			children: [
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
                ]
    		},
    		{
    			name:"Departments",
    			link:"/departments",
    			children: [
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
                ]
    		},
    		{
    			name:"Facilities",
    			link:"/facilities",
    			children: [
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
                ]
    		},
    		{
    			name:"Placement",
    			link:"/placement"
    		},
    		{
    			name:"Contact",
    			link:"/contact"
    		}
        ]
    },
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
   		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
      			plugins: [
					"gatsby-remark-copy-linked-files",
        			{
          				resolve: `gatsby-remark-images`,
          				options: {
            				maxWidth: 1080
          				}
        			}
      			]
    		}
		},
		{
			resolve:`gatsby-source-filesystem`,
			options:{
				name: `data`,
				path: `${__dirname}/data`
			}
		},
		`gatsby-transformer-yaml`,
        `gatsby-plugin-less`
	]
}
