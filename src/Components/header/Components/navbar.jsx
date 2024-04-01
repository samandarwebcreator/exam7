import React, { useState } from "react";
// import { Link } from "react-router-dom";

import searchIcon from "../../../assets/icons/Search.svg";
// import navbarIcon from "../../../assets/icons/Filter.svg";
import logo from "../../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import { desktopSearch } from "./icons";

export default function Navbar() {
  const [searchValid, setSearchValid] = useState(false);
  function showSearch() {
    setSearchValid(!searchValid);
  }
  return (
    <div className="container w-full flex items-center justify-between">
      <div>
        <Link to="/home">
          <img
            src={logo}
            alt="website logo"
            style={{ width: "150px", height: "34px" }}
          />
        </Link>
      </div>

      <div className="navbar flex gap-12">
        <Link className="navbar__links">Home</Link>
        <Link className="navbar__links">Shop</Link>
        <Link className="navbar__links">Plant Care</Link>
        <Link className="navbar__links">Blogs</Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="search-box">
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            style={{ display: searchValid ? "block" : "none" }}
          />
          <button className="btn-search" onClick={showSearch}>
            {desktopSearch}
          </button>
        </div>
        <Link>K</Link>
        <button>L &nbsp; Login</button>
      </div>
    </div>
  );
}
