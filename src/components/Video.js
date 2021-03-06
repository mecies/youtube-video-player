import React from 'react';
import '../style/Video.css'

const Video = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => { onVideoSelect(video) }} className="video item">
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="image" />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default Video;