import React, { Component } from "react";
import Helper from "./Helper";
import "./NewGameAgain.css";

export default class NewGameAgain extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false, level: 1 };
    this.handleStart = this.handleStart.bind(this);
    this.handlelevel = this.handlelevel.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }

  handleStart() {
    this.setState({ isPlaying: true });
  }
  handleOver() {
    this.setState({ isPlaying: false });
  }
  handlelevel() {
    this.setState({ level: this.state.level + 1 });
  }

  render() {
    var h = 100;
    var h1 = this.props.level * 10;
    var h2 = h + h1;
    return (
      <div>
        <div
          className="newGame d-flex justify-content-center align-items-center"
          style={{ height: `${h2}%` }}
        >
          <Helper
            handleOver={this.handleOver}
            handleStart={this.handleStart}
            handlelevel={this.handlelevel}
            level={this.state.level}
            isPlaying={this.state.isPlaying}
          />
        </div>
      </div>
    );
  }
}
