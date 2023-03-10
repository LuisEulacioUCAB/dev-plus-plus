import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return(
        <div id="home" className="youtube-main-banner">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="yout-main-banner-content">
                            <h1><span>Hi, I'M</span> Allison Doe</h1>
                            <p>A Photographer & Business Strategist who empowers entrepreneurs to build a brand, market it on social media, and create a life they love.</p>

                            <div className="btn-box">
                                <Link href="#">
                                    <a onClick={e => e.preventDefault()} className="default-btn-two">Youtube Channel</a>
                                </Link>

                                <ul>
                                    <li>
                                        <a href="https://facebook.com/" className="facebook" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/" className="instagram" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pinterest.com/" className="pinterest" target="_blank">
                                            <i className='bx bxl-pinterest-alt'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="yout-shape1"><img src="/images/youtube/yout-shape1.png" alt="image" /></div>
            <div className="yout-shape2"><img src="/images/youtube/yout-shape2.png" alt="image" /></div>
            <div className="yout-shape3"><img src="/images/youtube/yout-shape3.png" alt="image" /></div>
            <div className="yout-shape4"><img src="/images/youtube/yout-shape4.png" alt="image" /></div>
            <div className="yout-shape5"><img src="/images/youtube/yout-shape5.png" alt="image" /></div>
            <div className="yout-shape6"><img src="/images/youtube/yout-shape6.png" alt="image" /></div>
            <div className="yout-shape7"><img src="/images/youtube/yout-shape7.png" alt="image" /></div>
            <div className="yout-shape8"><img src="/images/youtube/yout-shape8.png" alt="image" /></div>
        </div>
    );
}

export default Banner;