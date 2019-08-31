import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ title }) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{title}</title>
                <link rel="icon" href="/images/favicon.png" type="image/png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    type="text/css"
                    rel="stylesheet"
                />
            </Helmet>
        </React.Fragment>
    );
};
