import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-list">
        <ul>
          <h3>About us</h3>
          <li>
            <Link className="clwhite" to="/">
              Who are we?
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Context
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Focus areas
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              A global movement
            </Link>
          </li>
        </ul>
        <ul>
          <h3>Get involved</h3>
          <li>
            <Link className="clwhite" to="/">
              Contact us
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Join us on Slack
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Become a Member
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Become a Sponsor
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Donate
            </Link>
          </li>
        </ul>
        <ul>
          <h3>What we do</h3>
          <li>
            <Link className="clwhite" to="/">
              Global Mentoring Program
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Talent Hub
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              Advocacy and Support
            </Link>
          </li>
        </ul>
      </div>
      <div className="policy">
        <ul>
          <li>
            <Link className="clwhite" to="/">
              COOKIE POLICY{" "}
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              PRIVACY POLICY
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              TERMS OF USE
            </Link>
          </li>
        </ul>
      </div>
      <div className="author">
        <span>
          Women in Tech ® All rights reserved. Website by Social Brain
        </span>
        <ul>
          <li>
            <Link className="clwhite" to="/">
              <FaFacebookF />
            </Link>
          </li>

          <li>
            <Link className="clwhite" to="/">
              <AiOutlineTwitter />
            </Link>
          </li>
          <li>
            <Link className="clwhite" to="/">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
