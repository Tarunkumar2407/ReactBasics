import React, { Component } from 'react'

export default class Constructor extends Component {
 constructor() {
    super();
    this.state= {
        name: "Tarun"
    }
    console.log("constructor")
 }

  render() {
    console.log("render")
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}
