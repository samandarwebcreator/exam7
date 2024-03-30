import React from "react";
import searchIcon from "../../assets/icons/Search.svg";
import navbarIcon from "../../assets/icons/Filter.svg";

export default function Header() {
  return (
    <div className="w-full">
      {/* <div></div> */}
      <div></div>
      <div className="sm:block md:hidden w-full ">
        <div className="main__wrapper w-full">
          <div className="w-full flex items-center justify-between container inner-wrapper">
            <div className="flex relative input-wrapper w-full">
              <span className="absolute search-icon">
                <img src={searchIcon} alt="search" />
              </span>
              <input
                type="search"
                className="border search-input"
                placeholder="Find your plants"
              />
            </div>
            <button className="bg-gradient-brand shadow-custom-shadow  ham__menu">
              <img src={navbarIcon} alt="hamburger menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
