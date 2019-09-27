import React from "react";
import { graphql, Link } from"gatsby";
import Img from "gatsby-image";
import marked from "marked"
import Layout from "../components/layout";
import '../style/single-page.less';
import style from '../style/announcements.module.less';

const meta = {
    title: "Announcements",
    description: "Announcements and news for College of Engineering Kidangoor, Kottayam"
}

export default ({ data }) => {
  const ann = [];
  const news = [];
  data.announcements.edges.forEach(function(item, i) {
      ann.push(
          <ListItem key={"tender"+i} data={item.node}/>
      );
  });

  data.news.edges.forEach(function(item, i) {
      news.push(
          <ListItem key={"tender"+i} data={item.node}/>
      );
  });

    return(
        <Layout meta={meta}>
            <div className="page-contents container">
                <div className="title center">
                    <h1 className="underlined">
                        <span>Announcements and News</span>
                    </h1>
                </div>
                <div className="contents">
                    <div className={"row "+style.announcements}>
                      <div className="col s12 m6">
                        <ul className="collection with-header">
                            <li className="collection-header">
                                <h4>Announcements</h4>
                            </li>
                          {ann}
                        </ul>
                      </div>
                      <div className="col s12 m6">
                        <ul className="collection with-header">
                          <li className="collection-header">
                              <h4>News</h4>
                          </li>
                          {news}
                        </ul>
                      </div>
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
    announcements: allAnnouncementsYaml{
        edges {
            node {
                data
                new
                date(formatString: "DD MMMM YYYY")
            }
        }
    }
    news: allNewsYaml{
        edges {
            node {
                data
                new
                date(formatString: "DD MMMM YYYY")
            }
        }
    }
}
`
