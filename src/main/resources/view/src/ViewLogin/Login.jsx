import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/images/icon-google.png";
import { MessageAlert } from "../assets/javascript/Message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isButtonDisabled = !email || !password;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleLogin = () => {
    if (!email) {
      MessageAlert("warning", "Email không được để trống");
    } else if (!regexEmail.test(email)) {
      MessageAlert("warning", "Email không đúng định dạng");
    } else if (!password) {
      MessageAlert("warning", "Mật khẩu không được để trống");
    } else if (!regexPassword.test(password)) {
      MessageAlert("warning", "Mật khẩu không đúng định dạng");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log("Email:", email);
        console.log("Mật khẩu:", password);
        console.log("Có nhớ mật khẩu không:", remember);
      }, 2000);
    }
  };

  return (
    <div className="row align-items-center">
      <div className="header-text mb-4">
        <h3>Xin chào, Bạn</h3>
        <p>Vui lòng đăng nhập để sử dụng trang web.</p>
      </div>
      <form>
        <div className="d-flex">
          <label className="form-label me-2" style={{ width: "92px", marginTop: "10px" }}>Email: </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg bg-light fs-6" name="email" placeholder="Mời nhập email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="d-flex">
          <label className="form-label me-2" style={{ width: "92px", marginTop: "10px" }}>Mật khẩu: </label>
          <div className="input-group mb-3">
            <input type={showPassword ? "text" : "password"} className="form-control form-control-lg bg-light fs-6" name="password" placeholder="Mời nhập mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="input-group-text bg-light" onClick={() => setShowPassword(!showPassword)} >
              {showPassword ? (
                <i className="bi bi-eye-slash-fill"></i>
              ) : (
                <i className="bi bi-eye-fill"></i>
              )}
            </button>
          </div>
        </div>
        <div className="input-group mb-5 d-flex justify-content-between">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="formCheck" name="remember" checked={remember} onChange={() => setRemember(!remember)} />
            <label htmlFor="formCheck" className="form-check-label text-secondary">
              <small>Nhớ giúp tôi</small>
            </label>
          </div>
          <div className="forgot">
            <small>
              <Link to="/forgot-password" state={{ fromLayout: true }} style={{ textDecoration: "none" }}> Quên mật khẩu? </Link>
            </small>
          </div>
        </div>
        <div className="input-group mb-3">
          <button type="button" onClick={handleLogin} className="btn btn-lg btn-primary w-100 fs-6 animationButton" disabled={loading || isButtonDisabled} >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2 loadingButton"></span>
              </>
            ) : (
              "Đăng Nhập"
            )}
          </button>
        </div>
        <div className="input-group mb-3">
          <a href="#" className="btn btn-lg btn-light w-100 fs-6">
            <img src={googleIcon} style={{ width: "20px" }} className="me-2" alt="" />
            <small>Đăng nhập bằng Google</small>
          </a>
        </div>
      </form>
      <div className="row">
        <small>
          Bạn không có tài khoản?{" "}
          <Link
            to="/signup"
            state={{ fromLayout: true }}
            style={{ textDecoration: "none" }}
          >
            Đăng ký
          </Link>

        </small>
      </div>
    </div>
  );
};

export default Login;