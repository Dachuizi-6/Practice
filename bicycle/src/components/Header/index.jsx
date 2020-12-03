import React from "react";
import { Row, Col } from "antd";
// 公共机制的封装
import utils from "../../utils/utils";
// 引入api
import axios from "../../axios";

import "./index.less";

export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: "wiking",
    });

    // 格式化时间
    setInterval(() => {
      const sysTime = utils.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    }, 1000);

    // 引入天气接口
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    let city = "深圳";
    axios
      .jsonp({
        url:
          "https://restapi.amap.com/v3/weather/weatherInfo?city=" +
          encodeURIComponent(city) +
          "&key=f8dff29b0f4a8d9151040a8d2fbc7af1",
      })
      .then((res) => {
        if (res.status === "1") {
          let data = res.lives[0];
          this.setState({
            cityName: data.city,
            weather: data.weather,
          });
        }
      });
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            {/* <span className="weather-img">
              <img src="" alt="" />
            </span> */}
            <span>{this.state.cityName}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
