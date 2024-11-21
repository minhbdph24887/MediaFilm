import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LoadingProvider } from "./layout/LoadingContext";
import ConfigGlobal from "./config/ConfigGlobal";

function App() {
  return (
    <LoadingProvider>
      <Router basename="/media-film"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <ConfigGlobal />
      </Router>
    </LoadingProvider>
  );
}

export default App;