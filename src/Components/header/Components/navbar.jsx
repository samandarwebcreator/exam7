import React, { useState } from "react";
import logo from "../../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";

import {
  desktopBasket,
  desktopSearch,
  loginIcon,
  mobileSearchIcon,
  navbarIcon,
} from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const screenWidth = window.innerWidth;
  const [navbarOpen, setNavbarOpen] = useState(
    screenWidth < 1200 ? false : true
  );
  const navbarLinks = [
    {
      id: 1,
      route: "/home",
      routeName: "Home",
    },
    {
      id: 2,

      route: "/shop",
      routeName: "Shop",
    },
    {
      id: 3,

      route: "/plant-care",
      routeName: "Plant Care",
    },
    {
      id: 4,

      route: "/blogs",
      routeName: "Blogs",
    },
  ];

  function openNavbar() {
    const isOpen = !navbarOpen;
    setNavbarOpen(isOpen);
  }

  return (
    <div className="container w-full flex items-center justify-between">
      <div className="mtd:max-w-[20%] xl:max-w-[33%] w-full hidden mtd:block">
        <Link to="/home">
          <img
            src={logo}
            alt="website logo"
            style={{ width: "150px", height: "34px" }}
          />
        </Link>
      </div>

      {navbarOpen && (
        <>
          <div
            className=" fixed inset-0 bg-background-shadow opacity-50 z-50 lg:hidden"
            onClick={() => setNavbarOpen(false)}
          ></div>
          <div className="navbar flex lg:gap-12 xl:max-w-[34%] xl:w-full flex-col lg:flex-row absolute right-0 lg:static top-0 max-w-[50vw] md:max-w-[30vw] py-4 px-2 max-h-[100vh] w-full h-full text-center gap-0 bg-white animate-fromRightToLeft z-[9999] mtd:font-normal lg:animate-none ">
            {navbarLinks.map((item) => {
              const { route, routeName, id } = item;

              return (
                <Link
                  key={id}
                  to={route}
                  className="navbar__links p-2 rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-brand-color hover:text-white lg:p-0 lg:font-normal lg:hover:border-gray lg:hover:text-text-color lg:hover:bg-transparent lg:border-b-[1.5px] border-transparent hover:border-text-color lg:rounded-none lg:transition-all lg:duration-300 lg:ease-in-out"
                >
                  {routeName}
                </Link>
              );
            })}

            <div className="flex lg:hidden mt-3 items-end justify-end mb-2">
              <button
                className="p-1.5 px-3 w-full bg-brand-color py-2 text-white rounded-md"
                onClick={() => setNavbarOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </>
      )}

      <div className="block mtd:flex w-full items-center justify-end gap-4 mtd:gap-2 lg:max-w-[36%] xl:max-w-[33%] flex-col md:flex-row">
        <div className="flex gap-4 bg-transparent relative overflow-hidden">
          <span className="absolute search-icon top-2.5 left-2 mtd:top-1 lg:hidden">
            {mobileSearchIcon}
          </span>
          <input
            type="text"
            placeholder="Find your plants"
            className=" pt-[8.5px] mtd:pt-[2px] pb-[10px] mtd:pb-1 pr-5 pl-10 bg-input-color outline-none rounded-[17px] mtd:rounded-lg border border-transparent max-w-[95%] w-full placeholder:text-gray-thin-placeholder text-gray-thin-placeholder focus:border-brand-color    mtd:w-[570px]          lg:border-0 lg:relative lg:py-1 lg:pr-10 lg:pl-3 lg:rounded-md lg:outline-none lg:z-10 lg:opacity-0 lg:bg-brand-color lg:text-white cursor-pointer lg:focus:z-0 lg:focus:opacity-100 lg:focus:animate-fromBottomToTop lg:placeholder:text-white"
          />
          <button
            onClick={openNavbar}
            className="block mtd:hidden bg-gradient-brand shadow-custom-shadow rounded-2xl mtd:rounded-lg  border border-transparent cursor-pointer p-4 mtd:p-2 transition-all duration-200 ease-in-out active:opacity-75 transform scale-90"
          >
            {navbarIcon}
          </button>
          <button className="hidden lg:block absolute top-1.5 right-5 z-0.1">
            {desktopSearch}
          </button>
        </div>
        <div className="hidden mtd:flex">
          <Link>{desktopBasket}</Link>
          <span>0</span>
        </div>
        <button className="hidden mtd:flex items-center justify-around gap-1.5 bg-brand-color text-white border border-transparent rounded-lg cursor-pointer font-semibold py-1 pl-4 pr-3.5 transition-all duration-200 ease-in-out active:opacity-75 transform scale-90">
          <div>{loginIcon}</div>
          <p>Login</p>
        </button>

        <button
          onClick={openNavbar}
          className="hidden mtd:block lg:hidden bg-gradient-brand shadow-custom-shadow rounded-2xl mtd:rounded-lg  border border-transparent cursor-pointer p-4 mtd:p-2 transition-all duration-200 ease-in-out active:opacity-75 transform scale-90"
        >
          {navbarIcon}
        </button>
      </div>
    </div>
  );
}
