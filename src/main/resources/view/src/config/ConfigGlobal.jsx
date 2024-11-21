import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutLogin from "../layout/LayoutLogin";
import Login from "../ViewLogin/Login";
import SignUp from "../ViewLogin/SignUp";
import ForgotPassword from "../ViewLogin/ForgotPassword";
import NewPassword from "../ViewLogin/NewPassword";
import { useLoading } from "../layout/LoadingContext";
import LoadingApp from "../layout/Loading";
import IndexUser from "../ViewUser/IndexUser";

function ConfigGlobal() {
    const { globalLoading,
        showGlobalLoading,
        hideGlobalLoading,
        showLocalLoading,
        hideLocalLoading } = useLoading();
    const location = useLocation();

    useEffect(() => {
        const { state } = location;

        if (!state?.fromLayout) {
            showGlobalLoading();
            const timer = setTimeout(hideGlobalLoading, 1500);
            return () => clearTimeout(timer);
        }

        if (state?.fromLayout) {
            showLocalLoading();
            const timer = setTimeout(hideLocalLoading, 1500);
            return () => clearTimeout(timer);
        }

        hideGlobalLoading();
    }, [location.pathname, location.state]);

    return (
        <>
            {globalLoading ? (
                <LoadingApp />
            ) : (
                <Routes>
                    <Route path="/home" element={<IndexUser />} />
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
export default ConfigGlobal;