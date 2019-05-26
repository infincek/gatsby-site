/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		"gatsby-transformer-json",
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
				path: `${__dirname}/src/data`
			}
		},
		{
			resolve:`gatsby-source-filesystem`,
			options:{
				name: `campusLife`,
				path: `${__dirname}/src/data/campus-life`
			}
		},
		{
      		resolve: `gatsby-source-filesystem`,
      		options: {
        		name: `images`,
        		path: `${__dirname}/src/data/departments`
      		}
    	},
		`gatsby-transformer-yaml`,
	]
  /* Your site config here */
}
