import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';
import formatDate from '../../utils/formatDate';

const PopularVideos = ({ videos }) => {
    // console.log(videos)
    const [isOpen, setIsOpen] = React.useState(true);
    const [videoId, setVideoId] = React.useState();

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const handleVideoId = (e) => {
        setVideoId(e)
    }

    return(
        <>
            {/* If you want to change the video need to update below videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId={videoId}
                onClose={() => setIsOpen(!isOpen)} 
            />

            <section id="videos" className="featured-videos-area pt-100">
                <div className="container">
                    <div className="section-title-two">
                        <h2>My Popular Videos</h2>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); window.open ('https://www.youtube.com', '_blank')}} className="link-btn">See All</a>
                        </Link>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="row">

                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="single-featured-videos-box">
                                        <div className="videos-image">
                                            <img src="/images/youtube/featured-videos/featured-video1.jpg" alt="image" />
            
                                            <span className="duration">03.05</span>

                                            <span className="icon">
                                                <i className='bx bx-video-recording'></i>
                                            </span>
                                    
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[0].id.videoId)}}
                                                    className="link-btn popup-youtube"
                                                ></a>
                                            </Link>
                                        </div>
            
                                        <div className="videos-content">
                                            <h3>
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[0].id.videoId)}}
                                                        className="popup-youtube"
                                                    >
                                                        {videos[0].snippet.title}
                                                    </a>
                                                </Link>
                                            </h3>
                                            <ul className="videos-meta">
                                                <li>4.3M views</li>
                                                <li>{formatDate(videos[0].snippet.publishedAt)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="single-featured-videos-box">
                                        <div className="videos-image">
                                            <img src="/images/youtube/featured-videos/featured-video2.jpg" alt="image" />
            
                                            <span className="duration">04.09</span>
                                            <span className="icon">
                                                <i className='bx bx-video-recording'></i>
                                            </span>
                                    
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[1].id.videoId)}}
                                                    className="link-btn popup-youtube"
                                                ></a>
                                            </Link>
                                        </div>
            
                                        <div className="videos-content">
                                            <h3>
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[1].id.videoId)}}
                                                        className="popup-youtube"
                                                    >
                                                        {videos[1].snippet.title}
                                                    </a>
                                                </Link>
                                            </h3>

                                            <ul className="videos-meta">
                                                <li>5.0M views</li>
                                                <li>{formatDate(videos[1].snippet.publishedAt)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-featured-videos-box">
                                <div className="videos-image">
                                    <img src="/images/youtube/featured-videos/featured-video5.jpg" alt="image" />

                                    <span className="duration">10.14</span>
                                    <span className="icon">
                                        <i className='bx bx-video-recording'></i>
                                    </span>
                            
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[2].id.videoId)}}
                                            className="link-btn popup-youtube"
                                        ></a>
                                    </Link>
                                </div>

                                <div className="videos-content">
                                    <h3>
                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[2].id.videoId)}}
                                                className="popup-youtube"
                                            >
                                                {videos[2].snippet.title}
                                            </a>
                                        </Link>
                                    </h3>

                                    <ul className="videos-meta">
                                        <li>1.1M views</li>
                                        <li>{formatDate(videos[2].snippet.publishedAt)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="single-featured-videos-box">
                                        <div className="videos-image">
                                            <img src="/images/youtube/featured-videos/featured-video3.jpg" alt="image" />
            
                                            <span className="duration">03.00</span>
                                            <span className="icon">
                                                <i className='bx bx-video-recording'></i>
                                            </span>
                                    
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[3].id.videoId)}}
                                                    className="link-btn popup-youtube"
                                                ></a>
                                            </Link>
                                        </div>
            
                                        <div className="videos-content">
                                            <h3>
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[3].id.videoId)}}
                                                        className="popup-youtube"
                                                    >
                                                        {videos[3].snippet.title}
                                                    </a>
                                                </Link>
                                            </h3>

                                            <ul className="videos-meta">
                                                <li>4.0M views</li>
                                                <li>{formatDate(videos[3].snippet.publishedAt)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="single-featured-videos-box">
                                        <div className="videos-image">
                                            <img src="/images/youtube/featured-videos/featured-video4.jpg" alt="image" />
            
                                            <span className="duration">05.00</span>
                                            <span className="icon">
                                                <i className='bx bx-video-recording'></i>
                                            </span>
                                    
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[4].id.videoId)}}
                                                    className="link-btn popup-youtube"
                                                ></a>
                                            </Link>
                                        </div>
            
                                        <div className="videos-content">
                                            <h3>
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[4].id.videoId)}}
                                                        className="popup-youtube"
                                                    >
                                                        {videos[4].snippet.title}
                                                    </a>
                                                </Link>
                                            </h3>

                                            <ul className="videos-meta">
                                                <li>2M views</li>
                                                <li>{formatDate(videos[4].snippet.publishedAt)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PopularVideos;