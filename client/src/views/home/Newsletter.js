import React, { Component, Fragment } from "react";

export default class Newsletter extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h1>Pour ne pas passer à côté de l’affiche de votre spot favori</h1>
          <br />
        </div>
        <div>
          <h5>Inscrivez vous à la newsletter</h5>
          <br />
        </div>
        <div>
          <form className="form-inline">
            <div className="container">
              <div className="row">
                <div className="col-xs-8">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="kilian@adventurers.com"
                    aria-label="Search"
                  />
                </div>
                <div className="col-xs-4">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
