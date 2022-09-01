import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import "./index.scss";
const TopHeader = () => {
  return (
    <div id="top-header">
      <div className="container clearfix">
        <div id="et-secondary-menu">
          <ul className="et-social-icons">
            <li className="et-social-icon et-social-facebook">
              <a
                href="https://www.facebook.com/WomenInTechOrg/"
                class="icon"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li class="et-social-icon et-social-instagram">
              <a
                href="https://www.twitter.com/womenintechorg"
                class="icon"
                target="_blank"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li class="et-social-icon et-social-linkedin">
              <a
                href="https://www.linkedin.com/company/womenintechorg/"
                class="icon"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
          <ul id="et-secondary-nav" class="menu">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10890">
              <a href="https://women-in-tech.org/news/">News &amp; Media</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8059">
              <a href="https://women-in-tech.org/contact-2/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
