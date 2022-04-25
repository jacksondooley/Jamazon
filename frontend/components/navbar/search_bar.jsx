import React from "react";
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="search-bar">
          <select>
            <option value="All">All</option>
            <option value="Jam">Jam</option>
            <option value="groceries">Groceries</option>
          </select>
        <input className="search-bar-input" type="text" line-height="30px" />
        
        <IconContext.Provider value={{size: "20px"}}>
          <button className="FaSearch"><FaSearch/></button>
        </IconContext.Provider>
      </div>
    )
  }
}

export default SearchBar

