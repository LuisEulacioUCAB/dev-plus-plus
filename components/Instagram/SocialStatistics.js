import React from 'react';
import Link from 'next/link';

const SocialStatistics = () => {
    return (
        <section id="socialStatistics" className="social-statistics-area pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>Social Statistics</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-social-statistics-box">
                            <h3>8M</h3>
                            <span className="sub-title d-block">Facebook followers</span>

                            <Link href="#">
                                <a className="link"><i className="bx bxl-instagram"></i> @alikamaya</a>
                            </Link>

                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-social-statistics-box">
                            <h3>1.2M</h3>
                            <span className="sub-title d-block">Pinterest followers</span>

                            <Link href="#">
                                <a className="link"><i className='bx bxl-pinterest-alt'></i> @alikamaya</a>
                            </Link>

                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-social-statistics-box">
                            <h3>58K</h3>
                            <span className="sub-title d-block">Linkedin followers</span>

                            <Link href="#">
                                <a className="link"><i className='bx bxl-linkedin'></i> @alikamaya</a>
                            </Link>

                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1">
                <img src="/images/instagram/insta-shape1.png" alt="image" />
            </div>
        </section>
    );
}

export default SocialStatistics;