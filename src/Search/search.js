import React from "react";
// import {Link} from "react-router-dom";
import "../index.css";

function Search (){
  return (
    <div>
        <div className="search-container">
        <h2>Search for events</h2>
        <form className="form">
          <input
            name="searchTerm"
            type="text"
            placeholder="concert"
          ></input>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
