import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Banner = () => {
    return(
        <div id="home" className="main-banner">
            <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                    <div className="main-banner-content">
                        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                            <img src="/images/banner.jpg" className="main-image principal-banner" alt="image" />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Banner;
