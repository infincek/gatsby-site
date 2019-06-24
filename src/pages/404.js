import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

class NotFoundPage extends React.Component{
        render(){
                const {data}=this.props
                const siteTitle=`CE Kidangoor`

                return (
                        <Header location={this.props.location} title={siteTitle}>
                        <h1>Not Found</h1>
                        <p>You just hit a route that <b>Doesn&#39;t Exist</b>.... We recommend you to check out the other things.....</p>
                        </Header>
                )
        }
}
export default NotFoundPage
