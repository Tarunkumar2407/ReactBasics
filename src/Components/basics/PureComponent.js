import React, { Component } from 'react'

export default class PureComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
  render() {
    console.log("re-render")
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={()=>this.setState({count: this.state.count})}>Update</button>
        {/* <button onChange={()=> this.setState({count: this.state.count + 1})>Update</button> */}
      </div>
    )
  }
}

