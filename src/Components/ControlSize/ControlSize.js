import React, { Component } from "react";
import "./ControlSize.css";
class ControlSize extends Component {
  render() {
    const { currentFontSize, currentColor, onChangeSize } = this.props;
    return (
      <div className="control_size">
        Font-size : {currentFontSize} px <br />
        Color : {currentColor}
        <div>
          <button onClick={() => onChangeSize(-1)}>-</button>
          <button onClick={() => onChangeSize(1)}>+</button>
        </div>
      </div>
    );
  }
}
export default ControlSize;
