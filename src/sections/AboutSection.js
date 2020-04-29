import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Element name="About" className="element"></Element>
        <Fullpage className="second">
          <div>
            <h2 className="aboutTitle">{data.section[0].title}</h2>
            <p className="aboutPara">{data.section[0].items[0].content}</p>
          </div>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <DownIcon icon={data.icons.down} />
          </Link>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;
