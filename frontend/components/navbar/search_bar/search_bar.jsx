import React from "react";
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import {Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { search: ""}

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleInput(e) {
    this.setState({ search: e.target.value })
  }

  handleSearch(e) {
    e.preventDefault()
    console.log(this.state.search)
    if (this.state.search.length > 0) {
      console.log(this.props)
      this.props.history.push(`/search/${this.state.search}`)
    }
  }

  render () {
    return (
      <div className="search-bar">
          <select>
            <option value="All">All</option>
            <option value="Book">Book</option>
            <option value="Electronics">Electronics</option>
            <option value="Home">Home</option>
            <option value="Clothes">Clothes</option>
            <option value="Jam">Jam</option>
            <option value="groceries">Groceries</option>
            <option value="office">Office</option>
            <option value="toysandgames">Toys and Games</option>
            <option value="Pet Supplies">Pet Supplies</option>
          </select>
        <input 
          className="search-bar-input" 
          type="text" 
          line-height="30px" 
          value={this.state.searchCriteria}
          onChange={this.handleInput}
        />
        
        <IconContext.Provider value={{size: "20px"}}>
          <button className="FaSearch" onClick={this.handleSearch}>
            <FaSearch/>
          </button>
        </IconContext.Provider>
      </div>
    )
  }
}

export default SearchBar

