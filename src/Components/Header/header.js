import React from "react";
import logo from "../../Pic/Header/Group_6.png";
import "./header.css";


class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
        <nav className="navbar header navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} className="logo-header-img" alt="logo" />
              <span className="logo-title">thefox business</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"/>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
            </div>
          </div>
        </nav>


    );
  }
}

export default Header;
