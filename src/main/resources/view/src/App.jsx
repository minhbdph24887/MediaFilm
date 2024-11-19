import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LayoutLogin from "./layout/LayoutLogin";
import Login from "./ViewLogin/Login";
import SignUp from "./ViewLogin/SignUp";
import ForgotPassword from "./ViewLogin/ForgotPassword";
import NewPassword from "./ViewLogin/NewPassword";
import { useLoading, LoadingProvider } from "./layout/LoadingContext";
import LoadingApp from "./layout/Loading";

function AppWithLoading() {
  const { globalLoading, showGlobalLoading, hideGlobalLoading, localLoading, showLocalLoading, hideLocalLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    const { pathname, state } = location;
  
    // Điều kiện 1: Hiển thị loading toàn màn hình khi từ ngoài Login vào
    if (pathname === "/login" && !state?.fromLayout) {
      showGlobalLoading();
      const timer = setTimeout(hideGlobalLoading, 1500);
      return () => clearTimeout(timer);
    }
  
    // Điều kiện 2: Hiển thị loading bên phải layout khi điều hướng nội bộ giữa các route trong LayoutLogin
    if (state?.fromLayout) {
      showLocalLoading();
      const timer = setTimeout(hideLocalLoading, 1500);
      return () => clearTimeout(timer);
    }
  
    // Tắt mọi loading mặc định
    hideGlobalLoading();
    hideLocalLoading();
  }, [location.pathname, location.state]); // Chú ý thêm `location.state` để theo dõi sự thay đổi state.  

  return (
    <>
      {globalLoading && <LoadingApp />} {/* Hiển thị loading toàn màn hình */}
      {!globalLoading && (
        <Routes>
          <Route path="/" element={<LayoutLogin />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="new-password" element={<NewPassword />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <Router basename="/media-film" future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <AppWithLoading />
      </Router>
    </LoadingProvider>
  );
}

export default App;