import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default ({type}) => {
    const query = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    logo
                    mobLogo
                }
            }
        }
    `);
    if(type === "logo"){
        return(
            <img src={query.site.siteMetadata.logo} alt="College of Engineering, Kidangoor"/>
        )
    }else if(type === "mobLogo"){
        return(
            <img src={query.site.siteMetadata.mobLogo} alt="College of Engineering, Kidangoor"/>
        )
    }
}
