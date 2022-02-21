import React from "react";
import logo from "../../Pic/Header/Group_6.png";
import "./header.css";


import Home from "../Home/index";
import Item from "../Item1/index";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router>
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
                <Link to="/">
                  <li className="nav-item">
                    {/*<span className="nav-link">*/}
                    {/*  home*/}
                    {/*</span>*/}
                  </li>
                </Link>
                {/*<Link to="/item1">*/}
                {/*  <li className="nav-item">*/}
                {/*    <span className="nav-link">*/}
                {/*      demos*/}
                {/*    </span>*/}
                {/*  </li>*/}
                {/*</Link>*/}
                {/*<li className="nav-item">*/}
                {/*  <span className="nav-link">*/}
                {/*    features*/}
                {/*  </span>*/}
                {/*</li>*/}

                {/*<li className="nav-item">*/}
                {/*  <span className="nav-link">*/}
                {/*    shortcodes*/}
                {/*  </span>*/}
                {/*</li>*/}

                {/*<li className="nav-item">*/}
                {/*  <span className="nav-link">*/}
                {/*    shop*/}
                {/*  </span>*/}
                {/*</li>*/}

                {/*<li className="nav-item">*/}
                {/*  <span className="nav-link">*/}
                {/*    blog*/}
                {/*  </span>*/}
                {/*</li>*/}

                {/*<li className="nav-item">*/}
                {/*  <span className="nav-link">*/}
                {/*    portfolio*/}
                {/*  </span>*/}
                {/*</li>*/}

                {/*<li className="nav-item">*/}
                {/*  <span className="nav-link header-search">*/}
                {/*    <img src={search} className="header-search-img" alt="search"></img>*/}
                {/*  </span>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/item1" component={Item} />
        </Switch>
      </Router>
    );
  }
}

export default Header;
