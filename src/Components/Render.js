import React, { Component } from 'react'

export default class Render extends Component {

    constructor(){
        super();
        this.state = {
            name: "Tarun"
        }
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=> this.setState({name: "TARUN KUMAR"})} >Update</button>
      </div>
    )
  }
}
