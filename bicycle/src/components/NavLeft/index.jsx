import React from "react";
import { Menu } from "antd";

import menuList from "../../config/menuConfig";
import "./index.less";

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode,
    });
  }

  //   渲染菜单
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
      }
    });
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    );
  }
}
