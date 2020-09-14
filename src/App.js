import React, { Component } from "react";
import "./App.css";
import ControlColor from "./Components/ControlColor/ControlColor";
import ControlSize from "./Components/ControlSize/ControlSize";
import Result from "./Components/Result/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "red",
      currentFontSize: 16,
    };
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
  }
  onChangeColor(color) {
    this.setState({
      currentColor: color,
    });
  }
  onChangeSize(size) {
    this.setState({
      currentFontSize: this.state.currentFontSize + size,
    });
  }
  render() {
    const { currentColor, currentFontSize } = this.state;
    return (
      <div className="app">
        <div className="control_panel">
          <h2>Bảng Điều Khiển</h2>
          <div className="content">
            <ControlColor
              onChangeColor={this.onChangeColor}
              currentColor={currentColor}
            />
            <ControlSize
              currentFontSize={currentFontSize}
              currentColor={currentColor}
              onChangeSize={this.onChangeSize}
            />
          </div>
          <Result
            currentColor={currentColor}
            currentFontSize={currentFontSize}
          />
        </div>
      </div>
    );
  }
}
export default App;
