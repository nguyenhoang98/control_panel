import React, { Component } from "react";
import "./ControlColor.css";
import classNames from "classnames";
class ControlColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ["red", "green", "gold"],
    };
  }
  render() {
    const { color } = this.state;
    const { onChangeColor, currentColor } = this.props;
    return (
      <div className="control_color">
        {color.map((color) => {
          return (
            <div
              className={classNames("bulb", {
                active: currentColor === color,
              })}
              style={{
                background: color,
              }}
              onClick={() => onChangeColor(color)}
              key={color}
            ></div>
          );
        })}
      </div>
    );
  }
}
export default ControlColor;
