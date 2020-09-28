import React, { Component } from "react";
import { choice } from "./helper";
import "./Logic.css";
import Game from "./Game";

export default class Logic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isplaying: false,
      Guessedcolor: "",
      origionalcolor: "",
      Score: 0,
      nwrong: true,
      disable: "",
    };
    this.start = this.start.bind(this);
    this.right = this.right.bind(this);
    this.wrong = this.wrong.bind(this);
  }

  start() {
    this.setState((curstate) => ({
      isplaying: true,
      disable: false,
      Score: 0,
      nwrong: true,
      Guessedcolor: choice(),
      origionalcolor: choice(),
    }));
  }

  right() {
    if (this.state.Guessedcolor === this.state.origionalcolor) {
      this.setState((curstate) => ({
        isplaying: true,
        disable: false,
        Score: curstate.Score + 1,
        nwrong: true,
        Guessedcolor: choice(),
        origionalcolor: choice(),
      }));
    } else {
      this.setState((curstate) => ({
        isplaying: false,
        disable: true,
        nwrong: false,
      }));
    }
  }
  wrong() {
    if (this.state.Guessedcolor !== this.state.origionalcolor) {
      this.setState((curstate) => ({
        isplaying: true,
        disable: false,
        Score: curstate.Score + 1,
        nwrong: true,
        Guessedcolor: choice(),
        origionalcolor: choice(),
      }));
    } else {
      this.setState((curstate) => ({
        isplaying: false,
        disable: true,
        nwrong: false,
      }));
    }
  }

  render() {
    return (
      <div>
        <Game
          isplaying={this.state.isplaying}
          Guessedcolor={this.state.Guessedcolor}
          origionalcolor={this.state.origionalcolor}
          Score={this.state.Score}
          nWrong={this.state.nwrong}
          disable={this.state.disable}
          right={this.right}
          wrong={this.wrong}
          start={this.start}
        />
      </div>
    );
  }
}
