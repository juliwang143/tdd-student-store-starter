import * as React from "react"
import "./Navbar.css"
import "../Sidebar/Sidebar"

import Logo from "../Logo/Logo";
import { Routes, Route, Link, useParams} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="content">
        <div className="socials"></div>
        <ul className="links">
          {/* <li>
            <Link to='/' className="nav-link">Home</Link>
          </li> */}
          <li>
            <HashLink smooth to={'/#home'}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#buy'}>
              Buy Now
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#about'}>
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#contact'}>
              Contact Us
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

