import React from "react";
import Layout from '../components/layout';
import Contact from "../components/contact.js";

const meta = {
    title: 'Contact',
    description:'Contact information of College of Engineering Kidangoor',
    keywords: 'contact, phone, email,map, location'
};

export default () => {
    return(
        <Layout meta={meta}>
            <Contact tag='h1'/>
        </Layout>
    )
}