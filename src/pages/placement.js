import React from "react";
import  { useEffect  } from 'react';
import { graphql, navigate } from "gatsby";

export default ({data}) => {
    useEffect(() => {
        navigate('/placement/'+data.site.siteMetadata.currentPlacementYear);
    }, []);
    return null;
}

export const query = graphql`
    query{
        site{
            siteMetadata{
                currentPlacementYear
            }
        }
    }
`