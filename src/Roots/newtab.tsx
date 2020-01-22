import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "../Pages/Home";

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
  ReactDOM.render(<Home />, document.getElementById("newtab"));
});
