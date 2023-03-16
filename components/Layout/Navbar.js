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

                        <div className="justify-content-end" id="navbarSupportedContent ">
                            <div className="footer-area">
                                <ul className="m-0">
                                    <li>
                                        <a href="https://instagram.com/dev_plus_plus?igshid=YmMyMTA2M2Y=" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@dev-plusplus" target="_blank">
                                            <i className='bx bxl-youtube'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/is_devplusplus" target="_blank">
                                            <i className='bx bxl-telegram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Dev_Plus_Plus?t=zGDJ5YS9wBC_BtGwJSYRIg&s=09" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/dev-plusplus" target="_blank">
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
