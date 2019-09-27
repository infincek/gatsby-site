import React from "react";
import { graphql } from"gatsby";
import marked from "marked"
import Layout from "../components/layout";
import '../style/single-page.less';
import style from '../style/announcements.module.less';

const meta = {
    title: "Tenders",
    description: "New tenders  for College of Engineering Kidangoor, Kottayam"
}

export default ({ data }) => {
  const ann = [];
  data.allTendersYaml.edges.forEach(function(item, i) {
      ann.push(
          <ListItem key={"tender"+i} data={item.node}/>
      );
  });

    return(
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>Tenders</span>
                    </h1>
                </div>
                <div classname="contents">
                    <div className={"row "+style.announcements}>
                        <ul className="collection with-header">
                          {ann}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const ListItem = ({data}) => {
    return(
        <li className="collection-item">
            {data.new &&
                <span className="badge">new</span>
            }
            <div dangerouslySetInnerHTML={{ __html: marked(data.data) }}></div>
            {
                data.date &&
                <span className="date"><i className="fa fa-calendar"></i> {data.date}</span>
            }
        </li>
    )
}


export const query = graphql`
query {
    allTendersYaml{
        edges {
            node {
                data
                new
                date
            }
        }
    }
}
`
