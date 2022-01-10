import React from "react";
import ReactDOM from "react-dom";

import ResetStyles from "styles/reset";
import App from "App";

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
