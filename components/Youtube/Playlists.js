import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const thumbs = [
    '/images/youtube/featured-videos/featured-video1.jpg',
    '/images/youtube/featured-videos/featured-video2.jpg',
    '/images/youtube/featured-videos/featured-video3.jpg',
    '/images/youtube/featured-videos/featured-video4.jpg',
]

const Playlists = ({ videos }) => {
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
            <section id="playlists" className="videos-playlists-area pt-70 pb-70">
                <div className="container">
                    <div className="section-title-two">
                        <h2>My Video Playlists</h2>
                        <Link href="#">
                            <a className="link-btn">See All</a>
                        </Link>
                    </div>

                    <div className="row">
                        {videos && (videos.map((v, i) => (
                            <div className="col-lg-3 col-sm-6 col-md-6" key={v.etag}>
                                <div className="single-playlists-videos-box">
                                    <div className="videos-image">
                                        <img src={thumbs[i]} alt={v.snippet.title} />

                                        <span className="duration">15.05</span>

                                        <span className="icon">
                                            <i className='bx bx-video-recording'></i>
                                        </span>
                                
                                        <Link href="#">
                                            <a onClick={e => {e.preventDefault(); openModal(); handleVideoId(v.id.videoId)}} className="link-btn"></a>
                                        </Link>

                                        <div className="playlists-icon">
                                            <i className='bx bxs-playlist'></i> <span>12</span>
                                        </div>
                                    </div>

                                    <div className="videos-content">
                                        <h3>TikTok</h3>
                                        <Link href="#">
                                            <a onClick={e => {e.preventDefault(); openModal(); handleVideoId(v.id.videoId)}} className="link-btn">View Full Playlist</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </section>
            
            {/* If you want to change the video need to update below videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId={videoId}
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    );
}

export default Playlists;