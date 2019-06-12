import React, { Component } from "react";
import logo from "../../../assets/img/logo/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div classNameName="main-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a style={{ color: "#ffffff" }} className="nav-link" href="#">
                  ACCUEIL <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#ffffff" }} className="nav-link" href="#">
                  Affiches
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#ffffff" }} className="nav-link" href="#">
                  A propos
                </a>
              </li>
              <li className="nav-item">
                <button
                  class="btn btn-outline-success my-2 my-sm-0 account-btn"
                  type="submit"
                >
                  Créer mon compte
                </button>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Recherchez vos spots favoris"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
