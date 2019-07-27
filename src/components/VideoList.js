import React from 'react';
import Video from './Video';

const VideoList = ({videos}) => {
    // destructured props ^

    const renderedList = videos.map((video)=>{
        return <Video video={video}/>
    })

    return <div>
        {renderedList}
    </div>
}

export default VideoList;