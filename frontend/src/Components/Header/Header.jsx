import React from "react";
import SearchIcon from "../Icons/SearchIcon/SearchIcon";
import MenuIcon from "../Icons/MenuIcon/MenuIcon";
import UserAvatarIcon from "../Icons/UserAvatarIcon/UserAvatarIcon";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  console.log(user)
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt=""
            className="h-10 w-10"
          />
          <p className="text-2xl font-bold text-primary-400">ashbnb</p>
        </Link>

      
          <div className=" hidden lg:flex items-center border border-gray-300 px-4 py-2 pl-6 rounded-full">
            <p className="border-r border-r-gray-300 pr-4">Any where</p>
            <p className="border-r border-r-gray-300 px-4">Any Week</p>
            <p className="px-4">Guests</p>
            <SearchIcon />
          </div>
        

        <Link to={user? "/account" : "/login"} className="flex items-center border border-gray-300 px-4 py-2 pl-6 rounded-full gap-4">
          <div className="flex items-center gap-1">
            <UserAvatarIcon />
            <MenuIcon />
          </div>
          {user ? (
            <p className="sm:max-w-40 max-w-20 truncate">{user.name}</p>
          ) : <></>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
