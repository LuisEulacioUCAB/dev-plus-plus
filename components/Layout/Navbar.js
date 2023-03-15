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
        // let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
        // window.addEventListener("scroll", () => {
        //     let fromTop = window.scrollY;
        //     mainNavLinks.forEach(link => {
        //         if (link.hash){
        //             let section = document.querySelector(link.hash);
        //
        //             if (
        //                 section &&
        //                 section.offsetTop &&
        //                 section.offsetTop <= fromTop &&
        //                 section.offsetTop + section.offsetHeight > fromTop
        //             ) {
        //                 link.classList.add("active");
        //             } else {
        //                 link.classList.remove("active");
        //             }
        //         }
        //     });
        // });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse justify-content-end' : 'navbar-collapse collapse show justify-content-end';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light bg-navbar-primary bg-navbar-primary p-0">
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

                        <div className={classOne} id="navbarSupportedContent ">
                            <div className="footer-area">
                                <ul>
                                    <li>
                                        <a href="https://instagram.com/" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com/" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
