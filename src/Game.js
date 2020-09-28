import React, { Component } from "react";
import "./Game.css";
import ProgressBar from "./ProgressBar";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.handleright = this.handleright.bind(this);
    this.handlestart = this.handlestart.bind(this);
    this.handlewrong = this.handlewrong.bind(this);
    this.handletime = this.handletime.bind(this);
    this.handleClier = this.handleClier.bind(this);
  }

  handletime() {
    this.x = setInterval(() => {
      this.setState({
        time: this.state.time + 10,
      });
    }, 1000);
  }
  handleClier() {
    clearInterval(this.x);
  }
  handleright(e) {
    e.preventDefault();
    this.props.right();
    this.setState({ time: 0 });
    this.handletime();
    if (this.state.time) {
      this.handleClier();
    }
  }

  handlewrong(e) {
    e.preventDefault();
    this.props.wrong();
    this.setState({ time: 0 });
    this.handletime();
    if (this.state.time) {
      this.handleClier();
    }
  }
  handlestart(e) {
    e.preventDefault();
    this.props.start();
    this.setState({ time: 0 });
    this.handletime();
    if (this.state.time) {
      this.handleClier();
    }
  }

  render() {
    return (
      <div>
        <div>
          <div class="uppermain w-100 m-0">
            <h1 className="display-3 text-center pt-2 text-white">
              Color Gaming!
            </h1>
          </div>
        </div>
        {this.props.nWrong && this.state.time <= 100 ? (
          <ProgressBar
            isplaying={this.props.isplaying}
            nWrong={this.props.nWrong}
            starts={this.props.start}
            time={this.state.time}
          />
        ) : (
          ""
        )}

        <div class="midmain d-flex justify-content-center align-items-center flex-column">
          <h5 className="mb-4 headingtext">
            Test Your Brain and Gain Your Score
          </h5>
          <div className="d-flex justify-content-center align-items-center mb-4">
            {this.props.nWrong && this.state.time <= 100 ? (
              <h3 className="scoretext text-white ml-5 sorry">
                Score:<span>{this.props.Score}</span>
              </h3>
            ) : (
              <div>
                <h2 className="scoretext2 text-white">Sorry Play Again</h2>
                <h5 className="text-center text-danger display-4 h5">
                  Your Score was {this.props.Score}
                </h5>
              </div>
            )}
          </div>
          <div className="midofmid mt-4 d-flex justify-content-center align-items-center flex-column">
            <h1
              className="display-4 mb-4 maintext"
              style={{ color: this.props.Guessedcolor }}
            >
              {this.props.origionalcolor}
            </h1>
            <div className="d-flex justify-content-center align-items-center mb-4">
              {this.props.isplaying && this.state.time <= 100 ? (
                <div>
                  <button
                    className="btn btnrw btn-success mr-3"
                    onClick={this.handleright}
                    disabled={this.state.time === 0 && true}
                  >
                    Right
                  </button>
                  <button
                    className="btn  btnrw btn-success ml-3"
                    onClick={this.handlewrong}
                    disabled={this.state.time === 0 && true}
                  >
                    Wrong
                  </button>
                </div>
              ) : (
                <button
                  className="btn btnlast btn-success mt-4 Play-again mb-5"
                  onClick={this.handlestart}
                >
                  Start Game
                </button>
              )}
            </div>

            {/* <Score CountVal={this.state.same} /> */}
          </div>
        </div>
      </div>
    );
  }
}
