import React from "react";
import reactlogo from "/src/assets/react.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md ">
      <img src={reactlogo} alt="logo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? " " : isActive ? "underline text-blue-500" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? " " : isActive ? "underline text-blue-500" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? " " : isActive ? "underline text-blue-500" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
