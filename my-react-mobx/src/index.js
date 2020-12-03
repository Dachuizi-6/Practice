import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./static/css/reset.css";

// 引入mobx相关
import { Provider } from "mobx-react"; //引入数据容器，这也是mobx这一类数据流框架实现数据共享的基础，子组件放这个容器当中，mobx才能做到跨组件数据共享
// Provider就是react中context中的属性
import stores from "./store";

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
