import Home from "./Components/Home";
import React from "react";
import { FilterProvider } from "./Context/FilterContext";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <FilterProvider>
      <Home />
      <ToastContainer />
    </FilterProvider>
  );
};

export default App;
