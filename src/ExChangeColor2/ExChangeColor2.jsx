import React, { Component } from 'react'
import ButtonColor from './ButtonColor'
import ImgCar from './ImgCar'

export default class ExChangeColor2 extends Component {
    state = {
        color: "red",
    }
    handleChange = (newColor) => {
        this.setState({
            color : newColor,
        })
    }
    colorArr = ["red","black","silver"]
    renderButton = () => {
       return this.colorArr.map((color,index) => {
            return <ButtonColor handleChange={this.handleChange} key={index} color={color}/>
        })
    } 
  render() {
    return (
      <div>
        <h3>ExChangeColor</h3>
        <ImgCar url={`./ExerciseCar/CarBasic/products/${this.state.color}-car.jpg`}/>
        <div>{this.renderButton()}</div>
      </div>
    )
  }
}
