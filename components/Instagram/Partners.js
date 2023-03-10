import React from 'react';
import Link from 'next/link';

const Partners = () => {
    return (
        <section className="partners-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Trusted Partners</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner1.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner2.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner3.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner4.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner5.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner6.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner7.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/instagram/partner/insta-partner8.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;