import React, { Component } from "react";
import "./Result.css";
class Result extends Component {
  render() {
    const { currentColor, currentFontSize } = this.props;
    return (
      <div
        className="result"
        style={{
          color: currentColor,
          border: `2px solid ${currentColor}`,
          fontSize: currentFontSize,
        }}
      >
        Nội Dung Kết Quả Hiển Thị
      </div>
    );
  }
}
export default Result;
