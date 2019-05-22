/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		"gatsby-transformer-json",
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
		`gatsby-transformer-yaml`,
		`gatsby-transformer-remark`
	]
  /* Your site config here */
}
