import React from 'react';
import ModalForm from './Modal/ModalForm';

const About = () => {
    return (
        <>
            <section id="about" className="about-area pt-70">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image">
                                <img src="/images/instagram/insta-about1.png" className="main-image" alt="image" />

                                <div className="shape">
                                    <img src="/images/instagram/insta-about-shape1.png" alt="image" />
                                    <img src="/images/instagram/insta-about-shape2.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">About Me</span>
                                <h2>I'm a Instagram influencer designer running my own design</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <div className="btn-box">
                                    <ModalForm />
                                    
                                    <a href="mailto:hello@alikamaya.com" className="email">
                                        hello@alikamaya.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
    
export default About;