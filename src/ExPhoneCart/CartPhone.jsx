import { Popconfirm } from "antd";
import React, { Component } from "react";

export default class CartPhone extends Component {
  renderRowPhoneCart = () => {
    let { arrayCart, handleDelete, handleChangeQuantity } = this.props;

    return arrayCart.map((phone) => {
      return (
        <tr key={phone.maSP}>
          <td>{phone.tenSP}</td>
          <td>
            <img height={50} src={phone.hinhAnh} alt="" />
          </td>
          <td>
            {phone.maSP == 1?(            
            <Popconfirm 
            description="Bạn có chắc chắn muốn xóa sản phẩm này không?"
            onConfirm={() => {
              handleDelete(phone.maSP)
            }}>
            <button
              className="btn btn-primary"
            >
              -
            </button>
            </Popconfirm>):(<button onClick={() => {
              handleChangeQuantity(phone.maSP,-1)
            }
            } className="btn btn-danger">-</button>)}          
            <span className="mx-2">{phone.soLuong}</span>
            <button onClick={() => {
              handleChangeQuantity(phone.maSP, +1)
            }
            } className="btn btn-success">+</button>
          </td>
          <td>{phone.giaBan}</td>
          <td>
            <Popconfirm 
            description="Bạn có chắc chắn muốn xóa sản phẩm này không?"
            onConfirm={() => {
              handleDelete(phone.maSP)
            }}>
            <button
              className="btn btn-primary"
            >
              Xoá
            </button>
            </Popconfirm>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="my-5 col-7">
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá tiền</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Ví dụ đang có thẳng  */}
            {this.renderRowPhoneCart()}
          </tbody>
        </table>
        {!this.props.arrayCart.length && (
          <div className="alert alert-danger">Giỏ hàng trống</div>
        )}
      </div>
    );
  }
}

// truthy, falsy
// 6 giá trị falsy: false,0,null,"", undefined, NaN
