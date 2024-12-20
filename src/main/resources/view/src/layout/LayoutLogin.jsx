import React from "react";
import { Outlet } from "react-router-dom";
import { useLoading } from "../layout/LoadingContext";
import logo from "../assets/images/logo.png";
import "../assets/Css/DeginLogin/Login.css";

const LayoutLogin = () => {
  const { localLoading } = useLoading();

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area"
        style={{ width: "92%", height: "600px" }}>
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#103cbe" }}>
          <div className="featured-image mb-3">
            <img src={logo}
              className="img-fluid"
              style={{ width: "250px" }}
              alt="" />
          </div>
          <p className="text-white fs-2"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: 600
            }}>
            MediaFilm
          </p>
          <small className="text-white text-wrap text-center"
            style={{
              width: "17rem",
              fontFamily: "'Courier New', Courier, monospace"
            }}>
            Chỉ cần bạn muốn phim nào, chúng tôi đáp ứng cho bạn.
          </small>
        </div>
        <div className="col-md-6 right-box position-relative">
          {localLoading && (
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.7)",
              zIndex: 10,
            }} >
              <div className="spinner-border" role="status" />
            </div>
          )}
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLogin;