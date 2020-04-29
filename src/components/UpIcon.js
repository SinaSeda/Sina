import React, { Component } from "react";

import "./upicon.css";

class UpIcon extends Component {
  render() {
    return (
      <div className="up">
        <img className="upicon" src={this.props.icon} />
      </div>
    );
  }
}

export default UpIcon;
