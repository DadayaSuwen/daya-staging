import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./global.less";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(<App />);
