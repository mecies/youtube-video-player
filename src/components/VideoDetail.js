import React from 'react';
import '../style/VideoDetail.css';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-container">   
            <div className="video">
                <iframe src={videoSrc} title={video.snippet.title}></iframe>
            </div>
            <div className="video-desc">
                <h4 className="header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        
    )
}

export default VideoDetail;