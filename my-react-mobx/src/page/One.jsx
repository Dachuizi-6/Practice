import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("oneStore")
// 使用共享数据源
@inject("homeStore")
@observer
class One extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //   handleClick = function () {
  //     console.log(1111);
  //     this.props.history.push("/");
  //   };
  handleClick = () => {
    // console.log(1111);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>页面一</h1>
        <h2>页面一的数据源：{this.props.oneStore.oneNum}</h2>
        <br />
        <h3>首页的数据源：{this.props.homeStore.homeNum}</h3>
        <button onClick={this.handleClick}>跳转到首页</button>
      </div>
    );
  }
}
export default One;

// 构造器里面要使用this，必须传入props参数，并且调用super，然后在里面才可以使用this
