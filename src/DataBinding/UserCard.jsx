import React, { Component } from "react";

export default class UserCard extends Component {
    // tạo data trong class không dùng let, dùng this
    username = "Alice Nguyễn"
  render() {
    let img_src = "https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG"
    // tạo data trong function dùng let không dùng this
    return (
      <div>
        <div className="card text-start">
          <img style={{width: 200, borderRadius: 20}} className="card-img-top" src={img_src} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{this.username}</h4>
          </div>
        </div>
      </div>
    );
  }
}
