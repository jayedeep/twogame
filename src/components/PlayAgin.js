import React, { Component } from "react";
import won from "../imges/won.png";
import lose from "../imges/lose.png";
import "./PlayAgain.css";
export default class PlayAgin extends Component {
  constructor(props) {
    super(props);
    this.levelUp = this.levelUp.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  levelUp() {
    this.props.handlelevel();
  }

  gameOver() {
    this.props.handleOver();
  }
  newGame() {
    this.props.handleStart();
  }
  componentDidMount() {
    // console.log(this.props.handlelevel);
    if (this.props.isWon === true) {
      this.props.handlelevel();
    }
  }

  render() {
    const wonorloss = this.props.isWon;
    return (
      <div>
        <div>
          {this.props.level === 12 ? (
            <h1>
              Game is Still in developing Mode So ferther Levels will be add
              After few days
            </h1>
          ) : (
            <div>
              {wonorloss ? (
                <div className="d-flex align-items-center flex-column">
                  <h1 className="h1Last">Level Up: {this.props.level}</h1>
                  <img
                    className="imgwon"
                    src={won}
                    style={{ width: "20vw", height: "20vh" }}
                  />
                  <h1 className="h1Last">Congratulations!!</h1>
                  <h1 className="h1Last">You Are Level Up</h1>
                  <button
                    id="btns"
                    className="btn btn-success  d-flex justify-content-center align-items-center"
                    onClick={this.gameOver}
                  >
                    <span className="btntext">Start New Level</span>
                  </button>
                </div>
              ) : (
                <div className="d-flex align-items-center flex-column">
                  <h3 className="h3Last">
                    your Level is Still : {this.props.level}
                  </h3>
                  <img
                    src={lose}
                    className="imgwon"
                    style={{ width: "20vw", height: "20vh" }}
                  />
                  <h1 className="h1Last text-center">
                    Try Again To Complete Level
                  </h1>
                  <button
                    id="btns"
                    className="btn btn-success  d-flex justify-content-center align-items-center"
                    onClick={this.gameOver}
                  >
                    <span className="btntext">Play Again</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
