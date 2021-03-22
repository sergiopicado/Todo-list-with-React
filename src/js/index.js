import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";

import { TodoList } from "./component/TodoList.js";

ReactDOM.render(<TodoList />, document.querySelector("#app"));
