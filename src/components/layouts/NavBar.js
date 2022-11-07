import React from "react";
import { useAuth } from "./../store/AuthStore";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-300 sm:px-4 py-5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
          onClick={() => navigate("/")}
          className="text-white bg-black px-5 py-2 rounded-md bg-opacity-20 text-xl font-semibold cursor-pointer"
        >
          {currentUser?.multiFactor?.user?.email}
        </div>
        <div className="flex">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
