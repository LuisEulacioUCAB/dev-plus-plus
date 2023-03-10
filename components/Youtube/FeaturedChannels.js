import React from 'react';
import Link from 'next/link';

const FeaturedChannels = () => {
    return (
        <section id="channels" className="featured-channels-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title-two">
                    <h2>Featured Channels</h2>
                    <Link href="#">
                        <a className="link-btn">See All</a>
                    </Link>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-featured-channels-box">
                            <Link href="#">
                                <a className="image">
                                    <img src="/images/youtube/channels/channel1.jpg" alt="image" />
                                </a>
                            </Link>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>MoonFairy</a>
                                    </Link>
                                </h3>
                                <span>1.5M Subscriber</span>

                                <Link href="#">
                                    <a className="link-btn">Subscribe</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-featured-channels-box">
                            <Link href="#">
                                <a className="image">
                                    <img src="/images/youtube/channels/channel2.jpg" alt="image" />
                                </a>
                            </Link>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>Creative</a>
                                    </Link>
                                </h3>
                                <span>1M Subscriber</span>
                                
                                <Link href="#">
                                    <a className="link-btn">Subscribe</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-featured-channels-box">
                            <Link href="#">
                                <a className="image">
                                    <img src="/images/youtube/channels/channel3.jpg" alt="image" />
                                </a>
                            </Link>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>Spartan</a>
                                    </Link>
                                </h3>
                                <span>500K Subscriber</span>
                                
                                <Link href="#">
                                    <a className="link-btn">Subscribe</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-featured-channels-box">
                            <Link href="#">
                                <a className="image">
                                    <img src="/images/youtube/channels/channel4.jpg" alt="image" />
                                </a>
                            </Link>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>Reaper</a>
                                    </Link>
                                </h3>
                                <span>100.5K Subscriber</span>
                                
                                <Link href="#">
                                    <a className="link-btn">Subscribe</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedChannels;