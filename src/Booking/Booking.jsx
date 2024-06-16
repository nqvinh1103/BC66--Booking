import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { type } from "@testing-library/user-event/dist/type";
import { CHARGED_SELECTED, DELETE_SELECTED, TYPE_SELECTED } from "./action";

class Booking extends Component {
  render() {
    console.log("props", this.props);
    const { list, bookingList, onSelected, handleChangeDelete, handleCharge } =
      this.props;
    return (
      <div className="container mt-5">
        <h1>Book vé xem phim</h1>

        <div className="row">
          <div className="col-7">
            <h3> Màn hình</h3>
            <div className="chair-container">
              {list.map((item, index) => {
                const first = index === 0;
                const danhSachGhe = item.danhSachGhe;
                return (
                  <div
                    className="chair-row"
                    key={`list-danh-sach-ghe=${index}`}
                  >
                    <div className="type">{first ? "" : item.hang}</div>
                    {danhSachGhe.map((ghe, index) => (
                      <div
                        key={`danh-sach-ghe=${index}`}
                        className={`ghe ${ghe.daDat ? "gheDuocChon" : ""} ${
                          ghe.dangChon ? "gheDangChon" : ""
                        }`}
                        onClick={() => {
                          if (ghe.daDat || ghe.dangChon) {
                            return;
                          }
                          const data = { hang: item.hang, ...ghe };
                          onSelected(data);
                        }}
                      >
                        {ghe.soGhe}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5">
            <h3>Số ghế đã đặt</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: 40,
              }}
            >
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <div className="gheDuocChon"></div>
                <p>Ghế đã đặt</p>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <div className="gheDangChon"></div>
                <p>Ghế đang đặt</p>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <div className="ghe"></div>
                <p>Ghế chưa đặt</p>
              </div>
            </div>
            <table className="table">
              <thead>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </thead>
              <tbody>
                {bookingList.map((item) => {
                  return (
                    <tr>
                      <td>{item.soGhe}</td>
                      <td>{item.gia}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleChangeDelete({
                              hang: item.hang,
                              soGhe: item.soGhe,
                            })
                          }
                          className="btn btn-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {bookingList.length && (
              <div className="text-end">
                <button
                  onClick={() =>
                    handleCharge({
                      hang: bookingList[0].hang,
                      soGhe: bookingList[0].soGhe,
                    })
                  }
                  className="btn btn-success"
                >
                  Thanh toán
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.movieReducer.list,
    bookingList: state.movieReducer.bookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (data) => {
      console.log(data);
      dispatch({ type: TYPE_SELECTED, payload: data });
    },
    handleChangeDelete: (data) => {
      console.log(data);
      dispatch({ type: DELETE_SELECTED, payload: data });
    },
    handleCharge: (data) => {
      console.log("data: ", data);
      dispatch({ type: CHARGED_SELECTED, payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
