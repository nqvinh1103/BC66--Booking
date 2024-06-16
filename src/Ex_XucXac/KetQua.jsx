import React, { Component } from 'react'

export default class KetQua extends Component {
  render() {
    let {choice,countTurn,countWin} = this.props
    return (
      <div className='pt-5 text-center'>
        {choice && <h2>Bạn chọn: {choice}</h2>}
        <h2>Số lượt chơi: {countTurn} </h2>
        <h2>Số lượt thắng: {countWin}</h2>
      </div>
    )
  }
}
