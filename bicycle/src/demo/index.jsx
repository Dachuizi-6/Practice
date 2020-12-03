import React from "react";
import { Button, Input } from "antd";

import "./index.less";

export default class Demo extends React.Component {
  render() {
    return (
      <div className="container">
        <Button type="primary">漂亮的按钮</Button>
        <Input placeholder="请输入用户名" />
        99999
      </div>
    );
  }
}
