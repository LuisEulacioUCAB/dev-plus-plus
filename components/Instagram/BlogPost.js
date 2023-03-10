import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <section id="blog" className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">From The Blog</span>
                    <h2>Latest insights are on top all times</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/instagram-single-blog">
                                    <a target="_blank">
                                        <img src="/images/instagram/blog/insta-blog1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="#">
                                            <a>Fashion</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Lifestyle</a>
                                        </Link>
                                    </li>
                                    <li>4 min read</li>
                                </ul>
                                <h3>
                                    <Link href="/instagram-single-blog">
                                        <a target="_blank">How to Successfully Negotiate with Influencers</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/instagram-single-blog">
                                    <a target="_blank">
                                        <img src="/images/instagram/blog/insta-blog2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="#">
                                            <a>Travel</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Style</a>
                                        </Link>
                                    </li>
                                    <li>3 min read</li>
                                </ul>
                                <h3>
                                    <Link href="/instagram-single-blog">
                                        <a target="_blank">How to Find the Perfect Influencers for Your Niche</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/instagram-single-blog">
                                    <a target="_blank">
                                        <img src="/images/instagram/blog/insta-blog3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="#">
                                            <a>Fashion</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Travel</a>
                                        </Link>
                                    </li>
                                    <li>6 min read</li>
                                </ul>
                                <h3>
                                    <Link href="/instagram-single-blog">
                                        <a target="_blank">How Micro-Influencers Can Transform Your Business</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/instagram-single-blog">
                                    <a target="_blank">
                                        <img src="/images/instagram/blog/insta-blog4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="#">
                                            <a>Lifestyle</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Travel</a>
                                        </Link>
                                    </li>
                                    <li>5 min read</li>
                                </ul>
                                <h3>
                                    <Link href="/instagram-single-blog">
                                        <a target="_blank">Influencer Marketing Trends to Expect in 2020</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPost;