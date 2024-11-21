import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [forgotEmail, setForgotEmail] = useState("");
    const [codeForgot, setcodeForgot] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isButtonDisabled = !forgotEmail || !codeForgot;
    const sendEmail = () => {
        navigate("/forgot-password", { state: { email: forgotEmail, fromLayout: true } });
    };

    const checkForgotPassword = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/new-password", { state: { email: forgotEmail, fromLayout: true } });
        }, 2000);
    }

    return (
        <div className="row align-items-center">
            <div className="header-text mb-4">
                <h2>Quên mật khẩu</h2>
                <p>Vui lòng nhập email để khôi phục tài khoản.</p>
            </div>
            <form>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <div className="input-group mb-3">
                        <input type="email"
                            name="forgotEmail"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Mời nhập email"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)} />
                        <button type="button"
                            className="btn btn-primary"
                            onClick={sendEmail}>
                            Gửi Mã
                        </button>
                    </div>
                </div>
            </form>
            <form>
                <div className="form-group">
                    <label className="form-label">Mã xác nhận: </label>
                    <div className="input-group mb-3">
                        <input type="text"
                            name="codeForgot"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Mời nhập mã xác nhận"
                            value={codeForgot}
                            onChange={(e) => setcodeForgot(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <button type="button"
                            className="btn btn-lg btn-primary w-100 fs-6 animationButton"
                            onClick={checkForgotPassword}
                            disabled={loading || isButtonDisabled} >
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2 loadingButton"></span>
                                </>
                            ) : (
                                "Tiếp Theo"
                            )}
                        </button>
                    </div>
                </div>
            </form>
            <div className="row">
                <small>
                    Bạn đã nhớ ra mật khẩu của mình?{" "}
                    <Link to="/login"
                        state={{ fromLayout: true }}
                        style={{ textDecoration: "none" }}>
                        Đăng Nhập
                    </Link>
                </small>
            </div>
        </div>
    );
};

export default ForgotPassword;