import React from 'react';
import Link from 'next/link';

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <p>Copyright &copy;{currentYear} HearMe. Designed by <Link href="#"><a target="_blank" href="https://envytheme.com/">EnvyTheme</a></Link></p>
                    </div>

                    <div className="col-lg-6 col-md-6">
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
        </footer>
    );
}

export default Footer;