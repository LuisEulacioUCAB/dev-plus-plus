import React from 'react';
import Link from 'next/link';

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <p className='text-light'>Copyright &copy;{currentYear} HearMe. Designed by <Link href="#"><a
                            target="_blank" href="https://envytheme.com/"
                            style={{color: '#30088a'}}>EnvyTheme</a></Link></p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <ul>
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
        </footer>
    );
}

export default Footer;
