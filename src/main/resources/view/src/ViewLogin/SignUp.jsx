import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isButtonDisabled = !email || !password;

    const handleSignUp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/login", { state: { fromLayout: true } });
        }, 2000);
    };

    return (
        <div>
            <div className="header-text mb-4">
                <h3>Đăng ký</h3>
                <p>Vui lòng đăng ký tài khoản để sử dụng trang web.</p>
            </div>
            <form>
                <div className="d-flex">
                    <label className="form-label me-2"
                        style={{
                            width: "208px",
                            marginTop: "10px"
                        }}>Họ và tên: </label>
                    <div className="input-group mb-3">
                        <input type="text"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Mời nhập họ và tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} />
                    </div>
                </div>
                <div className="d-flex">
                    <label className="form-label me-2"
                        style={{
                            width: "208px",
                            marginTop: "10px"
                        }}>Email: </label>
                    <div className="input-group mb-3">
                        <input type="email"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Mời nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="d-flex">
                    <label className="form-label me-2"
                        style={{
                            width: "208px",
                            marginTop: "10px"
                        }}>Mật khẩu: </label>
                    <div className="input-group mb-3">
                        <input type={showPassword ? "text" : "password"}
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Mời nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button type="button"
                            className="input-group-text bg-light"
                            onClick={() => setShowPassword(!showPassword)} >
                            {showPassword ? (
                                <i className="bi bi-eye-slash-fill"></i>
                            ) : (
                                <i className="bi bi-eye-fill"></i>
                            )}
                        </button>
                    </div>
                </div>
                <div className="d-flex">
                    <label className="form-label me-2"
                        style={{
                            width: "208px",
                            marginTop: "10px"
                        }}>Nhập lại mật khẩu: </label>
                    <div className="input-group mb-3">
                        <input type={showPassword ? "text" : "password"}
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
                <button type="button"
                    className="btn btn-lg btn-primary w-100 fs-6 animationButton"
                    onClick={handleSignUp}
                    disabled={loading || isButtonDisabled}>
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2 loadingButton"></span>
                        </>
                    ) : (
                        "Đăng ký"
                    )}
                </button>
            </form>
            <small style={{ marginTop: "150px" }}>
                Bạn đã có tài khoản?{" "}
                <Link to="/login"
                    state={{ fromLayout: true }}
                    style={{ textDecoration: "none" }}>
                    Đăng nhập
                </Link>
            </small>
        </div>
    );
};

export default SignUp;