import React, { Component } from 'react'
import Footer from './Footer'
import Navigate from './Navigate'
import Content from './Content'
import Header from './Header'

export default class ExHomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-4 p-8">
            <Navigate/>
          </div>
          <div className="col-8 p-8">
            <Content/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
