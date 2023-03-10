import React from 'react';
import Link from 'next/link';

const Podcast = () => {
    return (
        <section className="podcast-area pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>Build The Business Of Your Dreams With My Programs</h2>
                </div>

                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src="/images/instagram/podcast-img1.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="overview-content">
                        <div className="content">
                            <h3>Social Creator</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qu ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                            <Link href="#">
                                <a className="default-btn">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content">
                            <h3>The Podcast</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qu ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                            
                            <Link href="#">
                                <a className="default-btn">Read More</a>
                            </Link>
                        </div>
                    </div>

                    <div className="overview-image">
                        <div className="image">
                            <img src="/images/instagram/podcast-img2.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Podcast;