import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <section id="blog" className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title-two">
                    <h2>Latest Articles</h2>
                    <Link href="#">
                        <a className="link-btn">See All</a>
                    </Link>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blog-post-two">
                            <div className="post-image">
                                <Link href="/youtube-single-blog">
                                    <a target="_blank">
                                        <img src="/images/youtube/blog/yout-blog1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Entertainment</a>
                                </Link>

                                <h3>
                                    <Link href="/youtube-single-blog">
                                        <a target="_blank">How Brands Can Use Twitch to Stay Connected with Their Customers</a>
                                    </Link>
                                </h3>

                                <ul className="post-meta">
                                    <li>By <Link href="#"><a>Admin</a></Link></li>
                                    <li>25 April, 2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blog-post-two">
                            <div className="post-image">
                                <Link href="/youtube-single-blog">
                                    <a target="_blank">
                                        <img src="/images/youtube/blog/yout-blog2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Travel</a>
                                </Link>

                                <h3>
                                    <Link href="/youtube-single-blog">
                                        <a target="_blank">6 Steps to a Successful Influencer Brief + FREE Template!</a>
                                    </Link>
                                </h3>

                                <ul className="post-meta">
                                    <li>By <Link href="#"><a>Admin</a></Link></li>
                                    <li>25 April, 2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-blog-post-two">
                            <div className="post-image">
                                <Link href="/youtube-single-blog">
                                    <a target="_blank">
                                        <img src="/images/youtube/blog/yout-blog3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Fashion</a>
                                </Link>

                                <h3>
                                    <Link href="/youtube-single-blog">
                                        <a target="_blank">NEW! Upfluence’s Influencer Relationship Management tool</a>
                                    </Link>
                                </h3>

                                <ul className="post-meta">
                                    <li>By <Link href="#"><a>Admin</a></Link></li>
                                    <li>25 April, 2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPost;