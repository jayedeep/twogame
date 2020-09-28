import React, { Component } from "react";
import AnimatedImg from "./AnimatedImg";
import "./AnimatedList.css";
import MainClick from "./MainClick";
import "./Loader.css";

export default class AnimatedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randimg: "",
      randname: "",
      loaded: false,
    };
    this.handleProps = this.handleProps.bind(this);
  }

  handleProps(count) {
    this.setState({
      randimg: this.props.randomimg[count],
      randname: this.props.randomname[count],
    });
  }
  componentDidMount() {
    var count = -1;
    this.timer = setInterval(() => {
      count = count + 1;
      if (count === this.props.level + 2) {
        this.setState({ loaded: true });
      }
      if (count <= this.props.level + 1) {
        this.handleProps(count);
      } else {
        clearInterval(this.timer);
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.state.randname, this.state.randimg, this.state.loaded);
    // console.log(this.props.handleStart);
    return (
      <div className="AnimatedList">
        {this.state.loaded ? (
          <MainClick
            totalimg={this.props.randomimg}
            totalname={this.props.randomname}
            level={this.props.level}
            handleOver={this.props.handleOver}
            handlelevel={this.props.handlelevel}
            handleStart={this.props.handleStart}
          />
        ) : (
          <div>
            {this.state.randimg === "" || this.state.randname === "" ? (
              <div>
                <div className="loader"></div>
                <h1 className="h1tag1 text-center">Your Game is Loading ...</h1>
              </div>
            ) : (
              <div className="animatedImgMain">
                <AnimatedImg
                  randimg={this.state.randimg}
                  name={this.state.randname}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
