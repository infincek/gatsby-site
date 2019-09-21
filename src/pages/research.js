import React from "react";
import  { useEffect  } from 'react';
import { navigate } from "gatsby";

export default () => {
    useEffect(() => {
        navigate('/research/projects');
    }, []);
    return null;
}
