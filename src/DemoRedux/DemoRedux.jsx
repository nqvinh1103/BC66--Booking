import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TYPE_GIAM, TYPE_TANG, TYPE_USER } from '../Action';

class DemoRedux extends Component {
  render() {
    console.log("props", this.props);
    const {number,inCrease,deCrease,user,setUser}= this.props
    return (
      <div>
        <button onClick={() => 
          inCrease(4)} className="btn btn-success">Tăng</button>
        <h2>Number: {number}</h2>
        <button onClick={() => 
          deCrease(3)
        } className="btn btn-success">Giảm</button>
        <hr />

        <h3>Thông tin người dùng:</h3>
        <h4>Username: {user.username}</h4>
        <h4>Age: {user.age} </h4>
        <button className='btn btn-primary' onClick={() => {
          const user = {
            username: "Nguyễn Quang Minh",
            age: 20
          }
          setUser(user)
        }
        }>Set User</button>
      </div>
    )
  }
}
// lấy data về
let mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number,
    // Lấy thông tin user 
    user: state.userReducer.user
  }
}
//  đẩy data lên 
let mapDispatchToProps = (dispatch) => {
  return {
    inCrease: (data) => {
      console.log("Tăng",data);
      const action = {type: TYPE_TANG, payload: data}
      dispatch(action)
    },
    deCrease: (data) => {
      console.log("Giảm", data);
      const action = {type: TYPE_GIAM, payload: data}
      dispatch(action)
    },
    // Tạo 1 hàm để xét thông tin user
    setUser: (user) => {
      const action = {type: TYPE_USER, payload: user}
      dispatch(action)
    }
    
  }
}
// cách redux re-render component
export default connect(mapStateToProps,mapDispatchToProps)(DemoRedux)

// curry function