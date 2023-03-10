import React from 'react';
import axios from 'axios';
import Banner from '../components/Youtube/Banner';
import FeaturedVideos from '../components/Youtube/FeaturedVideos';
import About from '../components/Youtube/About';
import PopularVideos from '../components/Youtube/PopularVideos';
import Playlists from '../components/Youtube/Playlists';
import Partners from '../components/Youtube/Partners';
import TopStories from '../components/Youtube/TopStories';
import FeaturedChannels from '../components/Youtube/FeaturedChannels';
import BlogPost from '../components/Youtube/BlogPost';
import JoinWithMe from '../components/Youtube/JoinWithMe';
 
const Youtube = ({videos}) => {
    // console.log(videos)
    return (
        <>
            <Banner />

            <FeaturedVideos videos={videos.slice(0, 4)} />

            <About />

            <PopularVideos videos={videos.slice(5, 10)} />

            <Playlists videos={videos.slice(10, 14)} />

            <Partners />

            <TopStories videos={videos.slice(13, 16)} />

            <FeaturedChannels />

            <BlogPost />
            
            <JoinWithMe />
        </>
    );
}

Youtube.getInitialProps = async () => {
    const API_KEY = 'AIzaSyDlQp0kSfSnGB4B1PMsyjYLKhFij2_Eo9A';
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: 'katy perry',
            maxResults: 16,
            videoCount: 'desc'
        } 
    });

    // console.log(response)
    return { videos:  response.data.items};
}

export default Youtube;