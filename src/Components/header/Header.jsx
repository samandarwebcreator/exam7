import React from "react";
import searchIcon from "../../assets/icons/Search.svg";
import navbarIcon from "../../assets/icons/Filter.svg";
import { Link } from "react-router-dom";
import {
  basketIcon,
  homeIcon,
  likeIcon,
  scanerIcon,
  userIcon,
} from "./Components/icons";

export default function Header() {
  return (
    <div className="w-full">
      {/* <div></div> */}
      <div className="sm:block md:hidden w-full py-4 px-0 ">
        <div className=" w-full">
          <div className="w-full flex items-center justify-between container">
            <div className="flex relative input-wrapper w-full">
              <span className="absolute search-icon top-2.5 left-2">
                <img src={searchIcon} alt="search" />
              </span>
              <input
                type="search"
                className="search-input pt-[8.5px] pb-[10px] pr-5 pl-10 bg-input-color outline-none rounded-[17px] border border-transparent max-w-[95%] w-full placeholder:text-gray-thin-placeholder text-gray-thin-placeholder focus:border-brand-color appearance-none"
                placeholder="Find your plants"
              />
            </div>
            <button className="bg-gradient-brand shadow-custom-shadow p-4 rounded-2xl hover:opacity-80  ham__menu">
              <img src={navbarIcon} alt="hamburger menu" />
            </button>
          </div>

          <div className="fixed bottom-0 w-full flex main__wrapper bg-white py-7 rounded-t-2xl shadow-footer-routes-shadow ">
            <div className="w-1/2 flex inner__wrapper items-center justify-around pr-8">
              <Link to="/home">{homeIcon}</Link>
              <Link to="/favourites">{likeIcon}</Link>
            </div>
            <button className="button-li">{scanerIcon}</button>
            <div className="w-1/2 flex inner__wrapper items-center justify-around  pl-8">
              <Link to="/basket">{basketIcon}</Link>
              <Link to="/user">{userIcon}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
