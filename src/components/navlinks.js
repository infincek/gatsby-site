import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Link from "./link";

export default () => {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    navLinks {
                        name
                        link
                        children {
                            name
                            link
                        }
                    }
                }
            }
        }
    `);

    const list = [];

    query.site.siteMetadata.navLinks.forEach(function(e, i) {
        if (e.children) {
            const children = e.children.map(item => (
                <li key={item.link + '' + i + item.name}>
                    <Link
                        activeClassName="active"
                        title={item.name}
                        to={item.link}
                    >
                        {item.name}
                    </Link>
                </li>
            ));
            list.push(
                <li key={e.link + '' + i + e.name}>
                    <Link activeClassName="active" to={e.link} title={e.name}>
                        {e.name}
                    </Link>
                    <ul>{children}</ul>
                </li>
            );
        } else {
            list.push(
                <li key={e.link + '' + i + e.name}>
                    <Link activeClassName="active" to={e.link} title={e.name}>
                        {e.name}
                    </Link>
                </li>
            );
        }
    });
    return <ul>{list}</ul>;
};
