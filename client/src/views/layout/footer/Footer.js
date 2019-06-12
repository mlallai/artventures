import React, { Component, Fragment } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <div className="footer">
            <div className="row">
              <div className="col-xs-12 col-md-3">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="">LOGO</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">2019</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">Adventurer</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-3">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="">Accueil</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">A propos</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">Nous contacter</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-3">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="">FAQ</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">CGV</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">CGU</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-3">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="">Retrouvez-nous sur:</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">Instagram</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}
