import React from "react";
// import {Link} from "react-router-dom";
import "../index.css";

function Navbar (){
  return (
    <div>
    <nav className ="navbar">
      <ul className = "nav">
        <h1 className ="title">
          <p>Eventful</p>
        </h1>
        {/* <li className = "list">
            <Link to={"/explore"}>Explore</Link>
        </li>
        <li className = "list">
            <Link to={"/myGarden"}>My Garden</Link>
        </li>
        <li className = "list">
            <Link to={"/search"}>Search</Link>
        </li> */}
        <li className="navlist">Search</li>
        <li className="navlist">Popular</li>
        <li className="navlist">Saved</li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
