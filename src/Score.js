import React, { Component } from "react";

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    if (this.props.CountVal === true) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return <div>{this.props.CountVal}</div>;
  }
}
