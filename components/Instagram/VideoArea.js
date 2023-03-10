import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';

const VideoArea = () => {

    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* If you want to change the video need to update below videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <section className="video-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="video-content">
                                <span className="sub-title">Showreel</span>
                                <h2>Want to stick out in a saturated market?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
 
                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="bx bx-play"></i> Watch Video
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="video-image">
                                <img src="/images/instagram/video-img.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoArea;