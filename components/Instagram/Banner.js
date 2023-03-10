import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Banner = () => {
    return(
        <div id="home" className="main-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="main-banner-content">
                            <h1>Hi, I'M <br /> Alika Maya</h1>
                            <p>A Photographer & Business Strategist who empowers entrepreneurs to build a brand, market it on social media, and create a life they love.</p>

                            <form onSubmit={e => e.preventDefault()}>
                                <input type="text" className="input-newsletter" placeholder="Enter your email address" />
                                <button type="submit">Join with me now</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="main-banner-image">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <img src="/images/instagram/banner-img1.png" className="main-image" alt="image" />
                            </ScrollAnimation>

                            <div className="banner-shape">
                                <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
                                    <img src="/images/instagram/line-bg1.png" alt="image" />
                                </ScrollAnimation>
 
                                <ScrollAnimation animateIn="fadeInRight" delay={100} animateOnce={true}>
                                    <img src="/images/instagram/line-bg2.png" alt="image" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;