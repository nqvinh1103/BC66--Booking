import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let {color,name,handleClick,bgColor} = this.props
    console.log(this.props);
    return (
      <div style={{color: color, backgroundColor: bgColor}} className='p-5'>
        <h3>Card</h3>
        <h4>Username: {name}</h4>
        <button
        onClick={handleClick}
         className='btn btn-dark'>Click</button>
      </div>
    )
  }
}
