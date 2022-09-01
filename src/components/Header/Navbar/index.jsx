import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./index.scss";
const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src="imgs/logo-womenintech-global.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="dropdown" to="/">About Us</Link>
            <BiChevronDown />
          </li>
          <li>
            <Link className="dropdown" to="/">What we do</Link>
            <BiChevronDown />
          </li>
          <li>
            <Link className="dropdown" to="/">Where we are</Link>
            <BiChevronDown />
          </li>
          <li>
            <Link  className="dropdown" to="/">Events</Link>
            <BiChevronDown />
          </li>
          <li>
            <Link className="dropdown" to="/">Videos</Link>
            <BiChevronDown />
          </li>
          <li>
            <Link className="dropdown" to="/">Get Involved</Link>
            <BiChevronDown />
          </li>
          <li>
            <Link className="dropdown" to="">
              <button className="job-board-btn">Job Board</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
// src="" alt="" />
export default Navbar;
