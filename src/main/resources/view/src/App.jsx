import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutLogin from "./layout/LayoutLogin";
import Login from "./ViewLogin/Login";
import SignUp from "./ViewLogin/SignUp";
import ForgotPassword from "./ViewLogin/ForgotPassword";
import NewPassword from "./ViewLogin/NewPassword";

function App() {
  return (
    <Router basename="/media-film" future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <Routes>
        <Route path="/" element={<LayoutLogin />}>
          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
