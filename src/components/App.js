import React from 'react';
import youtube from '../APIs/youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

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
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
            <div className="five wide column"><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
