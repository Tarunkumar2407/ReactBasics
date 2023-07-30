import React, { Component } from 'react'

export default class PropsClass extends Component {
  constructor(){
    super();
    this.state = {
        name: "Tarun"
    }
  }
  changeName(){
    this.setState({data: "Ravi"})
  }

  render() {
    return (
      <div>
        <PropsClass name={"Tarun"} email={"tarun@gmail.com"} />
        <button onClick={() => this.changeName()}>Update Name</button>
      </div>
    )
  }
}

