import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";

import { SocialMediaIconsReact } from "social-media-icons-react";
import { Link, Element } from "react-scroll";

import "./WelcomeSection.css";

class WelcomeSection extends Component {
  render() {
    return (
      <div>
        <Element name="Welcome" className="element"></Element>
        <Fullpage className="first">
        <Element name="About" className="element"></Element>
          <h1 className="headerTitle">{data.title}</h1>
          <h3 className="headerSubtitle">{data.subtitle}</h3>
          <div>
            {Object.keys(data.links).map((key) => {
              return (
                <SocialMediaIconsReact
                  backgroundColor="#005A53"
                  roundness="5px"
                  icon={key}
                  url={data.links[key]}
                />
              );
            })}
          </div>
          <Link
          activeClass="active"
          to="About"
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

export default WelcomeSection;
