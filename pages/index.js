import React  from "react";
import Banner from "../components/Instagram/Banner";
import FeaturedVideos from "../components/Youtube/FeaturedVideos";
import axios from "axios";

const Home = ({videos}) => {
    return (
        <>
            <Banner/>
            <FeaturedVideos videos={videos.slice(0, 4)} />
        </>
    );
}

Home.getInitialProps = async () => {
    const API_KEY = 'AIzaSyAf_g1xy-7yy0SZsJIPpuiSZi8IXWU02fM';
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
        params: {
            key: API_KEY,
            part: 'snippet',
            maxResults: 25,
            channelId:'UC-zPXpOK4pPIegv55NrUr6w'
        }
    });

    // console.log(response)
    return { videos:  response.data.items};
}

export default Home;
