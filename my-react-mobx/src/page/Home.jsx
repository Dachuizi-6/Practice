import React, { Component } from "react";

import { observer, inject } from "mobx-react";
@inject("homeStore")
@observer
class Home extends Component {
  handleClick = () => {
    this.props.history.push("/one");
  };
  render() {
    console.log(this.props); //包含history、homeStore、location、match、
    return (
      <div>
        <h1>首页</h1>
        <h2>首页数据源的number为：{this.props.homeStore.homeNum}</h2>
        <button onClick={() => this.props.homeStore.addNum()}>点击加一</button>
        <button onClick={() => this.props.homeStore.lessNum()}>点击减一</button>
        <br />
        <button onClick={this.handleClick}>跳转到第一个页面</button>
      </div>
    );
  }
}
export default Home;

//引入数据容器，这也是mobx这一类数据流框架实现数据共享的基础，子组件放这个容器当中，mobx才能做到跨组件数据共享
// import { Provider } from "mobx-react";

// Provider就是react中context中的属性
// import stores from "./store";

// ReactDOM.render(
//   <Provider {...stores}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// mobx采用的是ES7装饰器语法

// 一：基本使用
// page/Home.jsx既然是Provider数据容器的子组件，那我们的子组件如何使用容器里面的数据呢
// 01、首先引入观察者和观察者使用的注射器
// import { observer, inject } from "mobx-react";

// 02、把数据放入注射器、观察者观察（注意先注射，然后才是观察）
// @inject("homeStore")
// @observer

// 03、通过this.props的方式获取到Provider传递过来的数据{
//  /* <h2>首页数据源的number为：{this.props.homeStore.homeNum}</h2> */

// 二：数据源如何修改：操作数据的操作：从mobx中导入action
// import { observable,action} from "mobx";

// 在class类中添加相应的方法
// class HomeStore {
//     @observable homeNum = 0;
//     + @action addNum() {
//     +  this.homeNum += 1;
//     + }
//     + @action lessNum() {
//     +  this.homeNum -= 1;
//     + }
//   }

// 在页面中 store里面定义的@action这边就用this.props.home.addNum()操作就可以了

// 三：共享数据怎么使用
// 前两步是展示和修改的操作，下一步共享数据怎么使用？？？？？？？？？？？？？？？？？？？？？？？？？？
// 在我们需要用到的数据源页面上加上@inject("homeStore") 就可以了---当然修改共享数据 也是

// 总结：观察者观察可观察的数据源，然后把数据源注射给要使用的组件
// store文件夹中一个xxxStore就是一个数据源的地方，每个类里面可以定义我们需要用到的数据，就和React中的state一样，index.js的作用就是把所有数据整合到一块去
