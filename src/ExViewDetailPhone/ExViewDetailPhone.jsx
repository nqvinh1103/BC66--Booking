import React, { Component } from "react";
import DetailPhone from "./DetailPhone";

const dataPhoneList = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

/**
 B1: Xây dựng giao diện hoàn chỉnh 100%
 B2: Xác định state là gì 1.array 2.object 3.number 4.string 5.boolean
 B3: Binding state lên giao diện 
 B4: mới đi xử lý sự kiện => setState (tùy theo yêu cầu)
 */

export default class ExViewDetailPhone extends Component {
  state = {
    detailPhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  handleChangeDetailPhone = (phone) => {
    this.setState({
      dataPhoneList: phone,
    });
  };
  renderPhone = (phone) => {
    return dataPhoneList.map((phone) => {
      return (
        <DetailPhone phone={phone} handleChangeDetailPhone={this.handleChangeDetailPhone} />
      );
    });
  };
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.detailPhone;
    return (
      <div className="container">
        <div>
          <h3>DANH SÁCH SẢN PHẨM</h3>
          <div className="d-flex justify-content-between">
            {this.renderPhone()}
          </div>
        </div>
        {/* Chi tiết sản phẩm */}
        <div className="row my-5">
          <div className="col-3">
            <h3>{tenSP}</h3>
            <img src={hinhAnh} height={300} />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
