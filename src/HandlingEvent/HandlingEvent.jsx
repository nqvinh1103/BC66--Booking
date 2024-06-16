import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    username = "Alice Nguyen"
    // event => handleEvent
    // function: có tham số / không có tham số
    handleChangeUsername = (newName) => {
        this.username = newName;
        console.log('after change: ', this.username);
    }
    handleChangeToBobby = () => {
        this.username = "Bobby"
        console.log('after change: ', this.username);
    }
  render() {
    return (
      <div>
        <h2>{this.username}</h2>
        <button onClick={() => {this.handleChangeUsername("Tommy") }} className="btn btn-success">Change Username</button>
        <button onClick={this.handleChangeToBobby} className="btn btn-danger">Change to Bobby</button>
      </div>
    )
  }
}
// trigger