import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../style/placement.less";

export default ({data}) => {
    const items = [];
    data.forEach((e,i) => {
        items.push(
            <Item data={e} key={e.id}/>
        )
    })
    return items;
}

const Item = (props) => {
    return(
        <div className="col s12 m6 l4 placement-item">
            <div className="box">
                <div className="image">
                    <Img
                        fluid={
                            props.data.frontmatter.logo.childImageSharp
                                .fluid
                        }
                        alt=""
                    />
                </div>
                <div className="description">
                    <span className="v-center" />
                    <p className="font-2 middle">
                        <b>{props.data.frontmatter.title}</b>
                    </p>
                </div>
                <Link
                    className="overlay-link"
                    title={props.data.frontmatter.title}
                    to={props.data.fields.slug}
                >
                    {props.data.frontmatter.title}
                </Link>
            </div>
        </div>
    )
}