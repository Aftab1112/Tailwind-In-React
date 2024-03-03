import React from "react";
import reactlogo from "/src/assets/react.svg";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md ">
      <img src={reactlogo} alt="logo" />
      <ul className="flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
