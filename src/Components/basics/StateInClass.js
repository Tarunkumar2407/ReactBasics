import React, { Component } from 'react'

export default class StateInClass extends Component {

    constructor() {
        super();
        this.state= {
            data: "Tarun",
        }
    }
    nameChange() {
        this.setState({data: "Ravi"})
    }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.nameChange()}>Click Me</button>
      </div>
    )
  }
}
