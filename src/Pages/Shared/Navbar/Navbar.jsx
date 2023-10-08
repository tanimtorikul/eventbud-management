import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg font-medium">
        <NavLink
          to="/"
          activeClassName="active-link"
          activeStyle={{ fontWeight: "extrabold" }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/events"
          activeClassName="active-link"
          activeStyle={{ fontWeight: "bold" }}
        >
          Events
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/about"
          activeClassName="active-link"
          activeStyle={{ fontWeight: "bold" }}
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 rounded-xl shadow-xl mt-4 mb-14">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-red-400">Event</span>Bud
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-blue-500 hover:bg-blue-600 text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
