import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../style/faculty.less';

export default function(props) {
    return <div className="row faculty-members hide-des">{getContents(props)}</div>;
}

function getContents(props) {
    const content = [];
    var edges = props.data.edges;

    edges.forEach(function(item, i) {
        content.push(<DataCol key={item.node.id} item={item} />);
    });
    return content;
}

function DataCol(props) {
    return (
        <div className="col s12 m6 l4 member">
            <div className="box">
                <div className="image">
                    <Img
                        fluid={
                            props.item.node.frontmatter.image.childImageSharp
                                .fluid
                        }
                        alt={props.item.node.frontmatter.title}
                    />
                </div>
                <div className="overlay">
                    <i className="fa fa-info" aria-hidden="true" />
                </div>
                <div className="description">
                    <p className="name">{props.item.node.frontmatter.title}</p>
                    <p className="subj">
                        {props.item.node.frontmatter.designation}
                    </p>
                    {props.item.node.frontmatter.departmentFullName &&
                        <p className="dep">
                            {props.item.node.frontmatter.departmentFullName}
                        </p>
                    }
                </div>
                <Link
                    to={props.item.node.fields.slug}
                    title={props.item.node.frontmatter.title}
                    className="overlay-link"
                >
                    {props.item.node.fields.slug}
                </Link>
            </div>
        </div>
    );
}
