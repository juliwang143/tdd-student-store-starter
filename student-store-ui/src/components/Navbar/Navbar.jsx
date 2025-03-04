import * as React from "react";
import "./Navbar.css";
import "../Sidebar/Sidebar";

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <ul className="links">
          <li>
            <Logo></Logo>
          </li>
          <li>
            <HashLink smooth to={"/#home"}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={"/#buy"}>
              Buy Now
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={"/#about"}>
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={"/#contact"}>
              Contact Us
            </HashLink>
          </li>
          <li>
            <Link to={"/orders"}>Orders</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
