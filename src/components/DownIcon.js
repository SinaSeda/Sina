import React, { Component } from "react";

import "./downicon.css";

class DownIcon extends Component {
  render() {
    return (
      <div className="down">
        <img className="downicon" src={this.props.icon} />
      </div>
    );
  }
}

export default DownIcon;
