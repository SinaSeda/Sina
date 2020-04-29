import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import UpIcon from "../components/UpIcon";
import { Link, Element } from "react-scroll";

import "./SkillsSection.css";

class SkillsSection extends Component {
  render() {
    return (
      <div>
        <Element name="Skills" className="element"></Element>
        <Fullpage className="third">
          <h2 className="skillsTitle">{data.section[1].title}</h2>
          <div className="card">
            {data.section[1].items.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </div>
          <Link
          activeClass="active"
          to="Welcome"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <UpIcon icon={data.icons.up} />
        </Link>
        </Fullpage>

      </div>
    );
  }
}

export default SkillsSection;
