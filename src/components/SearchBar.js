import React, { useState } from 'react'
import '../style/SearchBar.css'

const SearchBar = ({ onSearchTermSubmit }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = event => setSearchTerm(event.target.value)

  const onFormSubmit = event => {
    event.preventDefault();
    onSearchTermSubmit(searchTerm)
  }

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit} className="form">
        <label>Mecies video player (in progress) :) search for a video</label>
        <input
          type="text"
          value={searchTerm}
          onChange={onInputChange}
        />
      </form>
    </div>
  )
}

export default SearchBar;