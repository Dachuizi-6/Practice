import { observable, action } from "mobx";
// 存放一个(首页)页面数据源的类
class HomeStore {
  @observable homeNum = 0;
  @action addNum() {
    console.log(this); //store对象里面的每一个this打印出来的对象是当前这个Store对象
    this.homeNum += 20;
    console.log(this.homeNum);
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
}
export default HomeStore;
