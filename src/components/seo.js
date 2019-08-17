import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"
import {globalHistory} from "@reach/router"

const origin = globalHistory.location.origin;

function SEO({description, lang, meta, title, image, keywords}) {
    const {site} = useStaticQuery(graphql `
      query {
        site {
          siteMetadata {
            title
            description
			logo
          }
        }
      }
    `)

    const metaDescription = description || site.siteMetadata.description;
    const metaKeywords = keywords+", CEK, KGR, College of Engineering, Kidangoor, Kottayam" || "CEK, KGR, College of Engineering, Kidangoor, Kottayam";
    let ogImage = image || site.siteMetadata.logo
    ogImage = origin+""+ogImage;

    return (<Helmet htmlAttributes={{
            lang
        }} title={title} titleTemplate={title === site.siteMetadata.title
            ? title
            : `%s | ${site.siteMetadata.title}`} meta={[
            {
                name: `description`,
                content: metaDescription
            }, {
                property: `og:title`,
                content: title
            }, {
                property: `og:description`,
                content: metaDescription
            }, {
                property: `og:type`,
                content: `website`
            }, {
                name: `twitter:card`,
                content: `summary`
            }, {
                name: `twitter:creator`,
                content: site.siteMetadata.author
            }, {
                name: `twitter:title`,
                content: title
            }, {
                name: `twitter:description`,
                content: metaDescription
            }, {
                name: `og:image`,
                content: ogImage
            }, {
                name: `keywords`,
                content: metaKeywords
            }
        ].concat(meta)}/>)
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

export default SEO
