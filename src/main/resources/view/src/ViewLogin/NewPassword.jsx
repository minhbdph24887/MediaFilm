import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const navigate = useNavigate();

    const handkeCheckNewPassword = () => {
        navigate("/login", { state: { fromLayout: true } });
    };

    return (
        <div className="row align-items-center">
            <div className="header-text mb-4">
                <h2>Đặt mật khẩu</h2>
                <p>Vui lòng đặt mật khẩu để sử dụng website.</p>
            </div>
            <form>
                <div className="form-group">
                    <label className="form-label">Email: </label>
                    <div className="input-group mb-3">
                        <input type="text" name="email" className="form-control form-control-lg bg-light fs-6" placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly disabled />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Mật khẩu mới: </label>
                    <div className="input-group mb-3">
                        <input type="password" name="newPassword" className="form-control form-control-lg bg-light fs-6" placeholder="Mời nhập mật khẩu mới" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Nhập lại mật khẩu: </label>
                    <div className="input-group mb-3">
                        <input type="password" name="confirmNewPassword" className="form-control form-control-lg bg-light fs-6" placeholder="Mời nhập lại mật khẩu" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button type="button" className="btn btn-lg btn-primary w-100 fs-6" onClick={handkeCheckNewPassword}>Hoàn Thành</button>
                </div>
            </form>
        </div>
    );
};

export default NewPassword;