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
    // console.log('process.env.REACT_APP_GOOGLE_SECRET_KEY',process.env.REACT_APP_GOOGLE_SECRET_KEY)
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

export default Home;
