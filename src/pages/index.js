import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Wall from '../components/indexWallInfo';
import Welcome from '../components/indexWelcome';
import Tenders from "../components/tenders"
import News from '../components/news';
import CampusLife from '../components/campus-life';
import Departments from '../components/departments';
import Contact from '../components/contact';
import announcements from '../style/announcements.module.less';
import '../style/campus-life.less';

export default class props extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <Layout meta={{ title: 'College of Engineering, Kidangoor' }}>
                <Wall />
                <Welcome />
                <div
                    id="announcements"
                    className={'section ' + announcements.announcements}
                >
                    <div className="container">
                        <div className="title">
                            <h2 className="underlined">
                                Tenders and News
                            </h2>
                        </div>
                        <div className="contents">
                            <div className="row">
                                <div className="col s12 m6">
                                    <ul className="collection with-header">
                                        <li className="collection-header">
                                            <h4>Tenders <Link to="/tenders" title="View all Announcements"><i className="fa fa-chain"></i></Link></h4>
                                        </li>
                                        <Tenders />
                                    </ul>
                                </div>
                                <div className="col s12 m6">
                                    <ul className="collection with-header">
                                        <li className="collection-header">
                                            <h4>Latest News <Link to="/announcements-and-news" title="View all Announcements and news"><i className="fa fa-chain"></i></Link></h4>
                                        </li>
                                        <News />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="campus-life" className="section">
                    <div className="container">
                        <div className="title">
                            <h2 className="underlined">Campus Life</h2>
                        </div>
                        <div className="contents">
                            <div
                                className="campus-carousel"
                                id="campus-life-carousel"
                            >
                                <CampusLife />
                            </div>
                        </div>
                    </div>
                </div>
                <Departments />
                <Contact />
            </Layout>
        );
    }
}
