import React, { Component } from "react";
import "./AnimatedImg.css";
export default class AnimatedImg extends Component {
  constructor(props) {
    super(props);
    this.state = { rendered: true };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.name !== this.props.name) {
  //     console.log(prevProps.name, this.props.name);
  //     console.log("pokemons state has changed.");
  //     // this.setState({ rendered: !this.state.rendered });
  //   }
  // }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <img id="imges" className="img-fluid" src={this.props.randimg} />
        </div>
        <h5 className="h5tag text-center">{this.props.name}</h5>
      </div>
    );
  }
}
