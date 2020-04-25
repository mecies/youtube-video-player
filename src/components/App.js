import React, { useState, useEffect } from 'react';
import youtube from '../APIs/youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
import '../style/App.css'

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchTermSubmit('pozdrawiam cieplutko')
  }, [])

  const onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', { params: { q: searchTerm } })
    const videos = response.data.items

    setVideos(videos)
    setSelectedVideo(videos[0])
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className="container">
      <SearchBar onSearchTermSubmit={onSearchTermSubmit} />
      <main className="main">
        <div className=""><VideoDetail video={selectedVideo} /></div>
        <div className=""><VideoList videos={videos} onVideoSelect={onVideoSelect} /></div>
      </main>
    </div>
  )
}

export default App