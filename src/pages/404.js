import React from 'react';
import Layout from '../components/layout';


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
                    <p style={{ "marginTop" : "40px"}}>This page cannot be found</p>
                </div>
            </div>
        </Layout>
    );
}
