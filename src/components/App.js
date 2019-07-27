import React from 'react';
import youtube from '../APIs/youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {

  state = { videos: [] }

  onSearchTermSubmit = async (searchTerm) => {
    //instance of axios v
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
