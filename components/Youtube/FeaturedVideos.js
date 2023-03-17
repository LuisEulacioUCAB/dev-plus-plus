import React from 'react';
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false,
});
import Link from 'next/link';
import {useRouter} from 'next/router';
import formatDate from '../../utils/formatDate';


const FeaturedVideos = ({videos}) => {
    // console.log(videos)
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(true);
    const [videoId, setVideoId] = React.useState();

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const handleVideoId = (e) => {
        setVideoId(e)
    }

    return (
        <>
            <section className="featured-videos-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {videos && (videos.map((v, i) => (
                            <div className="col-lg-3 col-sm-6 col-md-6" key={v.etag}>
                                <div className="single-featured-videos-box">
                                    <div className="videos-image">
                                        <img src={v.snippet.thumbnails.medium.url} alt={v.snippet.title} width="100%"/>

                                        <span className="duration">03.05</span>
                                        <span className="icon">
                                            <i className='bx bx-video-recording'></i>
                                        </span>

                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {
                                                    e.preventDefault();
                                                    openModal();
                                                    handleVideoId(v.etag)
                                                }}
                                                className="link-btn popup-youtube"
                                            ></a>
                                        </Link>
                                    </div>

                                    <div className="videos-content">
                                        <h3>
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        openModal();
                                                        handleVideoId(v.id.videoId)
                                                    }}
                                                    className="popup-youtube text-light"
                                                >
                                                    {v.snippet.title}
                                                </a>
                                            </Link>
                                        </h3>
                                        <ul className="videos-meta ">
                                            <li className="text-light">4.3M views</li>
                                            <li className="text-light">{formatDate(v.snippet.publishedAt)}</li>
                                        </ul>
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

export default FeaturedVideos;
