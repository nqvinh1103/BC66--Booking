import React, { Component } from 'react'
import { movieArr } from './data'
import Item from './Item'
export default class RenderWithMap extends Component {
    // những function render phải có return
    renderMovie = () => {
        // in ra danh sách phim
        let nameArr = movieArr.map((movie,index) => {
          return <Item key={index} data={movie}/>
            return 
        })
        return nameArr
    }
  render() {
    console.log(movieArr);
    return (
      <div className='container'>
        <h3>RenderWithMap</h3>
        <div className="row">{this.renderMovie()}</div>
      </div>
    )
  }
}

// <tag props ></tag>
