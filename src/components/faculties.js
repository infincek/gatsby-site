import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../style/faculties.less';

export default function(props) {
    return <div className="row faculty-members">{getContents(props)}</div>;
}

function getContents(props) {
    const content = [];
    var edges = [];
    var hod = props.hod === 'true';
    if (hod) {
        var h = props.data.edges.find(obj => {
            return obj.node.frontmatter.hod;
        });
        if (h)
            edges.push(
                props.data.edges.find(obj => {
                    return obj.node.frontmatter.hod;
                })
            );
    } else {
        edges = props.data.edges;
    }
    edges.forEach(function(item, i) {
        if (!hod && item.node.frontmatter.hod) return;
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
                        alt=""
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
                </div>
                <Link
                    to={props.item.node.fields.slug}
                    title={props.item.node.fields.slug}
                    className="overlay-link"
                >
                    {props.item.node.fields.slug}
                </Link>
            </div>
        </div>
    );
}
