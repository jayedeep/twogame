import React, { Component } from "react";
import kim_soo_hyun from "../imges/kim_soo_hyun.jpg";
import kjw from "../imges/kjw.jpg";
import ksh from "../imges/ksh.jpg";
import lee_jung_suk from "../imges/lee_jung_suk.jpg";
import lee_min_ho from "../imges/lee_min_ho.jpg";
import psh from "../imges/psh.jpg";
import one from "../imges/one.jpg";
import two from "../imges/two.jpg";
import three from "../imges/three.jpg";
import four from "../imges/four.jpg";
import five from "../imges/five.jpg";
import six from "../imges/six.jpg";
import seven from "../imges/seven.jpg";

import AnimatedList from "./AnimatedList";
import MainClick from "./MainClick";
import "./Helper.css";

export default class Helper extends Component {
  static defaultProps = {
    imgs: [
      kim_soo_hyun,
      kjw,
      ksh,
      lee_jung_suk,
      lee_min_ho,
      psh,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
    ],
    name: [
      "kim",
      "jennie",
      "jone",
      "dynaris",
      "tonny",
      "shinhye",
      "alex",
      "alexa",
      "jessica",
      "jonas",
      "Gilbert",
      "Lewis",
      "Joshua",
      "Harvey",
      "Antonio",
      "Julian",
      "Aidan",
      "Peter",
    ],
    totalSize: 6,
  };
  constructor(props) {
    super(props);
    // this.state = { randomnum: [] };
    this.state = { randomimg: [], randomname: [] };
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    console.log(this.props.level);
    this.props.handleStart();
    var arrimg = [];
    while (arrimg.length < this.props.level + 2) {
      var rand = Math.floor(Math.random() * this.props.imgs.length);
      var tempImg = this.props.imgs[rand];
      if (arrimg.includes(tempImg) === false) {
        arrimg.push(tempImg);
      }
    }
    console.log(arrimg);
    var arrname = [];
    while (arrname.length < this.props.level + 2) {
      var rand1 = Math.floor(Math.random() * this.props.name.length);
      var tempname = this.props.name[rand1];
      if (arrname.includes(tempname) === false) {
        arrname.push(tempname);
      }
    }
    this.setState((curstate) => ({
      randomimg: arrimg,
      randomname: arrname,
    }));
  }

  render() {
    var h = 70;
    var h1 = this.props.level * 10;
    var h2 = h + h1;
    return (
      <div
        className="MainHelper d-flex justify-content-center align-items-center"
        style={{ height: `${h2}%` }}
      >
        {this.props.isPlaying ? (
          <AnimatedList
            randomname={this.state.randomname}
            randomimg={this.state.randomimg}
            handleOver={this.props.handleOver}
            handlelevel={this.props.handlelevel}
            handleStart={this.props.handleStart}
            level={this.props.level}
          />
        ) : (
          <div className="forhover">
            <button
              id="btns"
              className="btn btn-success  d-flex justify-content-center align-items-center"
              onClick={this.startGame}
            >
              <span className="btntext">Start Game</span>
            </button>
            <h1 className="h1tagin text-center">Level: {this.props.level}</h1>
          </div>
        )}
      </div>
    );
  }
}
