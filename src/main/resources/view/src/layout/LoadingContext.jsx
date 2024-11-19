import React, { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);

  const showGlobalLoading = () => setGlobalLoading(true);
  const hideGlobalLoading = () => setGlobalLoading(false);

  const showLocalLoading = () => setLocalLoading(true);
  const hideLocalLoading = () => setLocalLoading(false);

  return (
    <LoadingContext.Provider value={{ globalLoading, showGlobalLoading, hideGlobalLoading, localLoading, showLocalLoading, hideLocalLoading, }} >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);