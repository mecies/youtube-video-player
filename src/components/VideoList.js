import React from 'react';
import Video from './Video';
import '../style/VideoList.css'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, index) => {
    return (
      <Video
        key={`video-key-${index}-${video.id.videoId}`}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    )
  })

  return (
    <div className="video-list">
      {renderedList}
    </div>
  )
}

export default VideoList;