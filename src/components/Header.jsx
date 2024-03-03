import React, { useState } from "react";
import reactlogo from "/src/assets/react.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md ">
      <img src={reactlogo} alt="logo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-500 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={() => setIsOpen(true)}>Sign In</button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
      </ul>
    </header>
  );
}
