import React, { Component } from "react";

export class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Virat Kohli",
    };
  }
  handleclick = () => {
    this.setState({
      name: "Neymr.jr",
    });
  };
  render() {
    return (
      <div>
        <h1>Hi I am {this.state.name}</h1>
        <button onClick={this.handleclick}>Change Name</button>
      </div>
    );
  }
}

export default Demo;
