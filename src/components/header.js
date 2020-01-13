import React from "react";
import ReactDOM, { render } from "react-dom";

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav>
        <div className="nav-bar">
          <Link className="navbar-brand" href="">
            Mentor's Page
          </Link>
          <ul className="nav-right ">
            <li className="nav-item">
              {/* <Link className="home" to="/home">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              <Link className="home" to="/signin">
                login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="home" to="/signup">
                Sign-up
              </Link>
            </li>
            <li className="nav-item">{/* <IoIosSettings /> */}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
