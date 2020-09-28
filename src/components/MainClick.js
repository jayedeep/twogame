import React, { Component } from "react";
import PlayAgin from "./PlayAgin";
import "./PlayAgain.css";

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

export default class MainClick extends Component {
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
    maxo: 1,
  };
  constructor(props) {
    super(props);
    this.state = { data: { imgs: [], names: [] }, findname: "", isWon: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(guessname, realname) {
    console.log(guessname, realname);
    if (guessname === realname) {
      this.setState({ isWon: true });
    } else {
      this.setState({ isWon: false });
    }
    // console.log("okay this is running");
  }

  componentDidMount() {
    var arrimg = [];
    while (arrimg.length < this.props.maxo) {
      var rand = Math.floor(Math.random() * this.props.imgs.length);
      var tempImg = this.props.imgs[rand];
      if (
        arrimg.includes(tempImg) ||
        this.props.totalimg.includes(tempImg) === false
      ) {
        arrimg.push(tempImg);
      }
    }
    // console.log(arrimg);
    var arrname = [];
    while (arrname.length < this.props.maxo) {
      var rand1 = Math.floor(Math.random() * this.props.name.length);
      var tempname = this.props.name[rand1];
      if (
        arrname.includes(tempname) ||
        this.props.totalname.includes(tempname) === false
      ) {
        arrname.push(tempname);
      }
    }
    // console.log(arrname, arrimg);
    var conname = this.props.totalname.concat(arrname);
    var conimg = this.props.totalimg.concat(arrimg);
    this.setState((curstate) => ({
      data: {
        imgs: conimg,
        names: conname,
      },
    }));

    var rand2 = Math.floor(Math.random() * this.props.totalname.length);
    var randomname = this.props.totalname[rand2];
    this.setState({ findname: randomname });
  }

  render() {
    return (
      <div>
        {this.state.isWon === "" ? (
          <div>
            <h1 className="h1tag">Who is {this.state.findname} ?</h1>
            <div
              className="row
              d-flex
              justify-content-center
              align-items-center"
            >
              {this.state.data.imgs.map((m, i) => (
                <div
                  className=" columns col-md-4 col-sm-6 col-lg-3 col-6"
                  // style={{ width: "50%" }}
                  onClick={() =>
                    this.handleClick(
                      this.state.data.names[i],
                      this.state.findname
                    )
                  }
                >
                  <img
                    className="img-fluid mt-3"
                    src={m}
                    style={{ width: "40vw", height: "20vh" }}
                    alt={this.state.data.names[i]}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <PlayAgin
            isWon={this.state.isWon}
            level={this.props.level}
            handleOver={this.props.handleOver}
            handlelevel={this.props.handlelevel}
            handleStart={this.props.handleStart}
          />
        )}
      </div>
    );
  }
}
