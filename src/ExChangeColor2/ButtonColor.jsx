import React, { Component } from 'react'

export default class ButtonColor extends Component {
  render() {
    let {color, handleChange} = this.props
    return (
      <div 
      onMouseOver={() => {
        handleChange(color)
      }}
      className='btn text-white mx-2' 
      style={{background: color,}}
      >
        {color}
      </div>
    )
  }
}
