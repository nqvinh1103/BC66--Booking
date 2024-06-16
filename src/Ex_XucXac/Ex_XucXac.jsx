import React, { Component } from "react";
import ListXucXac from "./ListXucXac";
import KetQua from "./KetQua";
import "./index.scss"
import { TAI, XIU } from "./constant";

export default class Ex_XucXac extends Component {
  state = {
    numberArr: [3, 3, 3],
    choice: null,
    countTurn: 0,
    countWin: 0,
  };
  // luật tài xỉu >= 11 thì là tài
  handlePlayGame = () => {
    let max=6
    let min=1
    let total=0
    let newNumArr = this.state.numberArr.map((number) => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      total += random
      return random
    });
    total >= 11 && this.state.choice == TAI && 
    this.setState({
      countWin: this.state.countWin + 1,
    })
    total < 11 &&
    this.state.choice == XIU &&
    this.setState({
      countWin: this.state.countWin + 1,
    })
    this.setState({
        numberArr:newNumArr,
        countTurn:this.state.countTurn + 1,
    })
  };
  handleChoice = (choice) => {
    this.setState({
      choice: choice,
    })
  }
  render() {
    return (
      <div className="ex-game">
        <ListXucXac data={this.state.numberArr} handlePlayGame={this.handlePlayGame} handleChoice={this.handleChoice}/>
        <KetQua countWin={this.state.countWin} choice={this.state.choice} countTurn={this.state.countTurn}/>
      </div>
    );
  }
}
