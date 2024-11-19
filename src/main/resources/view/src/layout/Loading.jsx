import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingApp() {
  return (
    <div className="loading-screen" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "#ffffff",}} >
      <CircularProgress />
    </div>
  );
}

export default LoadingApp;