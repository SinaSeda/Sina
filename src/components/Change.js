import React, { Component } from "react";
import data from "../data.json";

import "./change.css";

class Change extends Component {
 
  render() {
    return (       
        <div>
          <img
            onClick={() => {
              // this.changeTeam();
              console.log("right")
            }}
            className="brush"
            src={data.icons.brush}
          ></img>
        </div>
    );
  }
}

export default Change;
