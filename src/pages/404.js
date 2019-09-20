import React from 'react';
import Layout from '../components/layout';
import Link from '../components/link'

const meta = {
    title: '404',
    description:'404 this page cannot be found',
    keywords: '404'
};

export default function() {
    return (
        <Layout meta={meta}>
            <div className="section">
                <div className="container" style={{ "textAlign": "center"}}>
                    <div className="title">
                        <h2 className="underlined" style={{ "fontSize": "72px"}}>404</h2>
                    </div>
                    <p style={{ "marginTop" : "40px"}}>This page cannot be found.... <br/> Maybe You can check out our Other Details like our</p>
                    <Link to="/" title="Home">Home</Link><br/>
                    <Link to="/departments" title="Departments"> Departments</Link>
                </div>
            </div>
        </Layout>
    );
}
