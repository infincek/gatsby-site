import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import marked from 'marked';
import Sidebar from 'react-sidebar';
import Navlinks from './navlinks';
import Logo from './logos';
import '../style/header.less';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.topBar = React.createRef();
        this.nav = React.createRef();
        this.navPlaceholder = React.createRef();

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.menuOpen = this.menuOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    menuOpen(event) {
        event.preventDefault();
        this.onSetSidebarOpen(true);
    }

    componentDidMount() {
        const topBarHeight = this.topBar.current.getBoundingClientRect().height;
        const nav = this.nav.current;

        if (window.innerWidth < 901) {
            nav.classList.add('fixed');
            this.navPlaceholder.current.style.height =
                nav.getBoundingClientRect().height + 'px';
        } else {
            window.addEventListener('scroll', function(e) {
                const top =
                    window.pageYOffset || document.documentElement.scrollTop;

                if (top >= topBarHeight) {
                    nav.classList.add('fixed');
                } else {
                    nav.classList.remove('fixed');
                }
            });
        }
    }

    render() {
        const baseData = this.props.data;
        return (
            <div id="header">
                <div className="top" ref={this.topBar}>
                    <div className="row flex">
                        <div className="col logo item s12 m3 l4">
                            <Link to="/" title="Home">
                                <Logo type="logo" />
                            </Link>
                        </div>
                        <div className="col ph item s6 m1 l2" />
                        <div className="col ph item s6 m2 l2">
                            <i className="fa fa-phone color-primary" />
                            <div>
                                <div className="prop color-primary">
                                    Contact
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: baseData.allBaseYaml.edges[0].node.data.phone.join(
                                            '<br/>'
                                        )
                                    }}
                                />
                                <a
                                    href={`mailto: ${baseData.allBaseYaml.edges[0].node.data.email}`}
                                >
                                    {
                                        baseData.allBaseYaml.edges[0].node.data
                                            .email
                                    }
                                </a>
                            </div>
                        </div>
                        <div className="col address item s6 m3 l2">
                            <i className="fa fa-map-marker color-primary" />
                            <div>
                                <div className="prop color-primary">
                                    Address
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(
                                            baseData.allBaseYaml.edges[0].node.data.address.replace(
                                                /(?:\r\n|\r|\n)/g,
                                                '<br/>'
                                            )
                                        )
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col address item s6 m3 l2">
                            <i className="fa fa-bookmark color-primary" />
                            <div>
                                <div className="prop color-primary">
                                    College Code : KGR
                                </div>
                                <div>
                                    <p>{baseData.allBaseYaml.edges[0].node.data.code}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="bg-primary" ref={this.nav}>
                    <Link to="/" className="home-navlink" title="Home">
                        <Logo type="mobLogo" />
                    </Link>
                    <div className="mobile">
                        <a href="#menu" onClick={this.menuOpen}>
                            <i className="fa fa-bars" />
                        </a>
                    </div>
                    <div className="nav">
                        <Navlinks />
                    </div>
                </nav>
                <div
                    className="navbar-placeholder"
                    ref={this.navPlaceholder}
                ></div>
                <Sidebar
                    sidebar={
                        <SidebarContents
                            data={baseData.allBaseYaml.edges[0].node.data}
                        />
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName="sidebar-content"
                    styles={{
                        root: {
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            right: 'auto',
                            bottom: 0,
                            overflow: 'hidden'
                        },
                        sidebar: {
                            zIndex: 999,
                            position: 'fixed'
                        },
                        overlay: {
                            zIndex: 998
                        },
                        dragHandle: {
                            position: 'fixed',
                            zIndex: '99999'
                        }
                    }}
                >
                    <span />
                </Sidebar>
            </div>
        );
    }
}

function SidebarContents({ data }) {
    return (
        <div className="sidebar-contents" id="menu">
            <div className="logo">
                <a href="/">
                    <Logo type="logo" />
                </a>
            </div>
            <div className="links">
                <Navlinks />
            </div>
            <div className="contact">
                <div className="col">
                    <i className="fa fa-phone color-primary" />
                    <p className="prop color-primary">Phone</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.phone.join('<br/>')
                        }}
                    />
                    <a className="text-primary" href={'mailto:' + data.email}>
                        {data.email}
                    </a>
                </div>
                <div className="col">
                    <i className="fa fa-map-marker color-primary" />
                    <p className="prop color-primary">Address</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked(
                                data.address.replace(/(?:\r\n|\r|\n)/g, '<br/>')
                            )
                        }}
                    />
                </div>
                <div className="col">
                    <i className="fa fa-bookmark color-primary" />
                    <p className="prop color-primary">College Code: KGR</p>
                    <div>{data.code}</div>
                    <p className="prop color-primary">Admission 2024</p>
                    <a className="text-primary" href={'mailto:' + data.url}>
                        {data.url}
                    </a>    
                </div>
            </div>
        </div>
    );
}

export default () => (
    <StaticQuery
        query={graphql`
            query contactInfoNavbarQuery {
                allBaseYaml {
                    edges {
                        node {
                            id
                            data {
                                phone
                                address
                                email
                                code                                
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Navbar data={data} />}
    />
);
