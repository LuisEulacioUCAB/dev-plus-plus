import React from 'react';
import Banner from "../components/Instagram/Banner";
import Followers from "../components/Instagram/Followers";
import About from "../components/Instagram/About";
import SocialStatistics from "../components/Instagram/SocialStatistics";
import InstagramAudience from "../components/Instagram/InstagramAudience";
import Partners from "../components/Instagram/Partners";
import VideoArea from "../components/Instagram/VideoArea";
import Podcast from "../components/Instagram/Podcast";
import BlogPost from "../components/Instagram/BlogPost";
import ContactArea from "../components/Instagram/ContactArea";

const Instagram = () => {
    return (
        <>
            <Banner />
            <Followers />
            <About />
            <SocialStatistics />
            <InstagramAudience />
            <Partners />
            <VideoArea />
            <Podcast />
            <BlogPost />
            <ContactArea />
        </>
    );
}

export default Instagram;