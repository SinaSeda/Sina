import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="skillCard">
        <img className="cardimage" src={skill.content.image} />
        <h4 className="cardtitle">{skill.content.title}</h4>
      </div>
    );
  }
}

export default SkillCard;
