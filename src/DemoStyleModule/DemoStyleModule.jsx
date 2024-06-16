import React, { Component } from 'react'
import style from "./index.module.css"
export default class DemoStyleModule extends Component {
  render() {
    return (
      <div>
        <div className={style.title}>DemoStyle</div>
      </div>
    )
  }
}
