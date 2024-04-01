import React from "react";
import { Link } from "react-router-dom";
import {
  basketIcon,
  homeIcon,
  likeIcon,
  scanerIcon,
  userIcon,
} from "./Components/icons";
import Navbar from "./Components/navbar";

export default function Header() {
  return (
    <div className="w-full">
      <div className="py-3">
        <Navbar />
      </div>
      <div className="sm:block md:hidden w-full py-4 px-0 ">
        <div className=" w-full">
          <div className="fixed bottom-0 w-full flex main__wrapper bg-white py-7 rounded-t-2xl shadow-footer-routes-shadow ">
            <div className="w-1/2 flex  items-center justify-around pr-8">
              <Link to="/home">{homeIcon}</Link>
              <Link to="/favourites">{likeIcon}</Link>
            </div>
            <button className="button-li bg-brand-color p-6 z-10  border-radius: 50% fixed bottom-[2%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-scaner-button-shadow">
              {scanerIcon}
            </button>
            <div className="w-1/2 flex  items-center justify-around  pl-8">
              <Link to="/basket">{basketIcon}</Link>
              <Link to="/user">{userIcon}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
