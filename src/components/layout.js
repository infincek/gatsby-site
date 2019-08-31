import React from 'react';
import Head from './head';
import Navbar from './navbar';
import Seo from './seo';
import Footer from './footer';

export default ({ meta, children }) => {
    return (
        <React.Fragment>
            <Head />
            <Seo {...meta} />
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    );
};
