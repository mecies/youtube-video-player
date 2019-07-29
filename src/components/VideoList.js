import React from 'react';
import Video from './Video';
import '../style/VideoList.css'

const VideoList = ({videos, onVideoSelect}) => {
    // destructured props ^

    const renderedList = videos.map((video)=>{
        return <Video key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
    })

    return (
        <div className="video-list">
            {renderedList}
        </div>
    )
}

export default VideoList;