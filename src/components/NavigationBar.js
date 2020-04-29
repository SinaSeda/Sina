import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import "./navigationbar.css";

class NavigationBar extends Component {
  // constructor(){
  //   super()
  //   this.state ={
  //     className: "first"
  //   }
  //   this.changeTeam = this.changeTeam.bind(this)
  // }
  // changeTeam () {
  //   this.setState({
  //     className: this.setState.className === "first" ? "first2" : "first"
  //   })
  // }
  render() {
    return (
      <div className="navbar">
        <Link
          className="navigationiems"
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          About
        </Link>
        <Link
          className="navigationiems"
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          Skills
        </Link>
        {/* <div>
          <img
            onClick={() => {
              // this.changeTeam();
              console.log("right")
            }}
            className="brush"
            src={data.icons.brush}
          ></img>
        </div> */}
      </div>
    );
  }
}

export default NavigationBar;
