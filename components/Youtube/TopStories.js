import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';

const TopStories = ({ videos }) => {

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
            
            <section className="top-stories-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title-two">
                        <h2>Top Stories</h2>
                        <Link href="#">
                            <a className="link-btn">See All</a>
                        </Link>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="single-top-stories-box">
                                <img src="/images/youtube/top-stories/top-stories1.jpg" alt="image" />

                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[0].id.videoId)}}
                                        className="link-btn popup-youtube"
                                    ></a>
                                </Link>
 
                                <div className="content extra-pd">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="duration">03.05</span>
                                        <span className="icon">
                                            <i className='bx bx-video-recording'></i>
                                        </span>
                                    </div>

                                    <h3>
                                        <Link href="#">
                                            <a onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[0].id.videoId)}}>{videos[0].snippet.title}</a>
                                        </Link>
                                    </h3>

                                    <ul className="meta">
                                        <li>4.3M views</li>
                                        <li>1 day ago</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-top-stories-box">
                                        <img src="/images/youtube/top-stories/top-stories2.jpg" alt="image" />

                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[1].id.videoId)}}
                                                className="link-btn popup-youtube"
                                            ></a>
                                        </Link>

                                        <div className="content">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="duration">03.05</span>
                                                <span className="icon">
                                                    <i className='bx bx-video-recording'></i>
                                                </span>
                                            </div>

                                            <h3>
                                                <Link href="#">
                                                <a onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[1].id.videoId)}}>{videos[1].snippet.title}</a>
                                                </Link>
                                            </h3>

                                            <ul className="meta">
                                                <li>4.3M views</li>
                                                <li>1 day ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-top-stories-box">
                                        <img src="/images/youtube/top-stories/top-stories3.jpg" alt="image" />

                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[2].id.videoId)}}
                                                className="link-btn popup-youtube"
                                            ></a>
                                        </Link>

                                        <div className="content">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="duration">03.05</span>
                                                <span className="icon">
                                                    <i className='bx bx-video-recording'></i>
                                                </span>
                                            </div>

                                            <h3>
                                                <Link href="#">
                                                <a onClick={e => {e.preventDefault(); openModal(); handleVideoId(videos[2].id.videoId)}}>{videos[2].snippet.title}</a>
                                                </Link>
                                            </h3>
                                            
                                            <ul className="meta">
                                                <li>4.3M views</li>
                                                <li>1 day ago</li>
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

export default TopStories;