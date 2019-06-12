import React, { Component, Fragment } from "react";
import StickyBox from "react-sticky-box";

import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default class HomePage extends Component {
  render() {
    return (
      <div class="homepage-main-container">
        <div className="row justify-content-md-center homepage-main-row">
          <div className="col-sm-12 col-md-6 hp-row">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <LeftPart />
            </StickyBox>
          </div>
          <div className="col-sm-12 col-md-6 hp-row">
            <RightPart />
          </div>
        </div>
      </div>
    );
  }
}
