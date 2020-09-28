import React, { Component } from "react";
import "./ProgressBar.css";
export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var color;
    if (this.props.time <= 25) {
      color = "bg-success";
    } else if (this.props.time <= 50) {
      color = "bg-info";
    } else if (this.props.time <= 75) {
      color = "bg-warning";
    } else {
      color = "bg-danger";
    }

    return (
      <div>
        <div class="progress">
          <div
            class={`progress-bar progress-bar-striped ${color}`}
            role="progressbar"
            style={{ width: `${this.props.time}%` }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <p>You have {10 - this.props.time / 10} Left</p>
          </div>
        </div>
      </div>
    );
  }
}
