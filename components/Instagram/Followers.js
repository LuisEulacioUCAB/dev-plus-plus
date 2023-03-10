import React from 'react';
import Link from 'next/link';

const Followers = () => {
    return(
        <section className="followers-area bg-f9f9f9 pt-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">What Do I Love</span>
                    <h2>I'm a Instagram influencer designer running my own design studio</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-followers-box">
                            <h3>275K</h3>
                            <span className="sub-title d-block">Instagram followers</span>

                            <Link href="#">
                                <a className="link"><i className='bx bxl-instagram'></i> @alikamaya</a>
                            </Link>

                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-followers-box">
                            <h3>125K</h3>
                            <span className="sub-title d-block">Twitter followers</span>

                            <Link href="#">
                                <a className="link"><i className='bx bxl-twitter'></i> @alikamaya</a>
                            </Link>

                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-followers-box">
                            <h3>178K</h3>
                            <span className="sub-title d-block">YouTube subscribers</span>

                            <Link href="#">
                                <a className="link"><i className='bx bxl-youtube'></i> @alikamaya</a>
                            </Link>

                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src="/images/instagram/insta-shape1.png" alt="image" /></div>
        </section>
    );
}

export default Followers;