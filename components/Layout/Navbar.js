import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);

        this.menuActiveClass()
    }

    menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash){
                    let section = document.querySelector(link.hash);

                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light bg-navbar-primary">
                    <div className="container">
                        <Link href="/instagram">
                            <a className="navbar-brand">
                                <img src="/images/logo.svg" alt="logo" height="40px" className='logo'/>
                            </a>
                        </Link>

                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <AnchorLink
                                        onClick={this.toggleNavbar}
                                        offset={() => 100}
                                        className="nav-link nav-item-primary"
                                        href="#home"
                                    >
                                        HOME
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink
                                        onClick={this.toggleNavbar}
                                        offset={() => -1}
                                        className="nav-link nav-item-primary"
                                        href="#about"
                                    >
                                        STORE
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink
                                        onClick={this.toggleNavbar}
                                        offset={() => -1}
                                        className="nav-link nav-item-primary"
                                        href="#socialStatistics"
                                    >
                                        ABOUT US
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink
                                        onClick={this.toggleNavbar}
                                        offset={() => -1}
                                        className="nav-link nav-item-primary"
                                        href="#instagramAudience"
                                    >
                                        CONTACTS
                                    </AnchorLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
