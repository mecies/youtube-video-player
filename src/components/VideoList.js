import React from 'react';
import Video from './Video';

const VideoList = ({videos, onVideoSelect}) => {
    // destructured props ^

    const renderedList = videos.map((video)=>{
        return <Video key ={video.id} video={video} onVideoSelect={onVideoSelect}/>
    })

    return (
        <div className="video-list ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;