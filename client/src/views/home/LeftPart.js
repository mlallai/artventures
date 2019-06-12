import React, { Component, Fragment } from "react";
import mb from "../../assets/img/home/mb.jpg";

export default class LeftPart extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            backgroundImage: `url(${mb})`
          }}
          className="left-part"
        >
          <div className="left-part-txt">
            <div>
              <h5 className="text-center left-part-h5">
                Affiche de la semaine
              </h5>
            </div>
            <div>
              <button
                className="btn btn-outline-success my-2 my-sm-0 left-part-btn"
                type="submit"
              >
                Voir l'affiche
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
