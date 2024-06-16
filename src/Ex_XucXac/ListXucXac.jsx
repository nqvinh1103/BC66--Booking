import React, { Component } from "react";
import { TAI, XIU } from "./constant";

export default class ListXucXac extends Component {
  renderListXucXac = () => {
    return this.props.data.map((number, index) => {
      return (
        <img
          key={index}
          width={200}
          src={`https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/${number}.png`}
          alt=""
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <button onClick={() => {this.props.handleChoice(TAI)}} className="btn btn-danger p-5">Tài</button>
          <div>{this.renderListXucXac()}</div>
          <button onClick={() => {this.props.handleChoice(XIU)}} className="btn btn-dark p-5">Xỉu</button>
        </div>
        <br />
        <button onClick={this.props.handlePlayGame} className="btn btn-warning">
          Play
        </button>
      </div>
    );
  }
}
