import React from 'react';
import './SearchBar.css'

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
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Video search</label>
            <input 
              type="text" 
              value={this.state.searchTerm} 
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;