import React, { Component } from 'react'

export default class ExChangeColor extends Component {
    state = {
        color: "red",
    }
    handleChangeColor = (newColor) => {
        this.setState({
            color: newColor,
        })
    }
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className='w-100' src={`./ExerciseCar/CarBasic/products/${this.state.color}-car.jpg`} alt="" />
                </div>
                <div className="col-6">
                    <button onClick={() => {
                        this.handleChangeColor("red")
                    }} className=" btn btn-danger">Red</button>
                    <button onClick={() => {
                        this.handleChangeColor("silver")
                    }}className=" btn btn-secondary">Silver</button>
                    <button onClick={() => {
                        this.handleChangeColor("black")
                    }} className=" btn btn-dark">Dark</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
// cách sử dụng thẻ img trong folder public => dẫn đường dẫn từ file index.html (không quan tâm đến vị trí file chứa component hiện tại)