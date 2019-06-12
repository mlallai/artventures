import React, { Component, Fragment } from "react";
import hpSmall from "../../assets/img/home/hp-small.png";
import Newsletter from "./Newsletter";

export default class RightPart extends Component {
  render() {
    const cardImage = (
      <div className="row">
        <div className="col-xs-12 col-md-5 col-lg-2 card-container text-center">
          <img src={hpSmall} alt="" />
        </div>
        <div className="col-xs-12 col-md-7 col-lg-10">
          <div className="card-body">
            <h5 className="card-title">GR 20 - Bruno Ferreira</h5>
            <p className="card-text">
              Cette semaine, nous vous présentons un travail de Bruno Ferreira
              sur le thème du GR 20.
            </p>
          </div>
        </div>
      </div>
    );
    return (
      <Fragment>
        <div className="right-part">
          <div className="right-part-top">
            {/* Title */}
            <div className="right-part-title">
              <h1>Précédentes Affiches</h1>
            </div>
            {/* Cards */}
            <div className="container">
              {cardImage}
              {cardImage}
              {cardImage}
              {cardImage}
            </div>
          </div>
          <br />
          <br />
          <Newsletter />
        </div>
      </Fragment>
    );
  }
}
