import React from 'react';
import '../style/SearchBar.css'

class SearchBar extends React.Component {

  state = {searchTerm: ''};

  onInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchTermSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="form">
            <label htmlFor="">Mecies video player (in progress) :) search for a video</label>
            <input 
              type="text" 
              value={this.state.searchTerm} 
              onChange={this.onInputChange}
            />
        </form>
      </div>
    )
  }
}

export default SearchBar;