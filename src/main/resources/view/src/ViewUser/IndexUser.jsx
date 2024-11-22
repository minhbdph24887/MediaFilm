import { useNavigate } from "react-router-dom";

const IndexUser = () => {
    const navigate = useNavigate();

    const LoginPage = () => {
        navigate("/login", { state: { fromLayout: false } }); // Cập nhật state thành true
    };

    return (
        <div className="container">
            <button type="button" className="btn btn-success" onClick={LoginPage}>
                Đăng nhập
            </button>
            <p style={{ fontSize: "18px" }}>
                Đây là giao diện trang chủ
            </p>
        </div>
    );
};

export default IndexUser;