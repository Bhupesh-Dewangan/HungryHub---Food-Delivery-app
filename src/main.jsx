import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterContext } from "./Context/FilterContext.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <FilterContext>
      <App />
    </FilterContext>
  </Provider>
);
