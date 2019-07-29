import React from 'react';
import youtube from '../APIs/youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
import '../style/App.css'

class App extends React.Component {

  state = { 
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchTermSubmit('młody waka waka')
  }

  onSearchTermSubmit = async (searchTerm) => {
    //instance of axios v
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit}/>
        <main className="main">
            <div className=""><VideoDetail video={this.state.selectedVideo} /></div>
            <div className=""><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /></div>
        </main>
      </div>
    );
  }
}

export default App;
