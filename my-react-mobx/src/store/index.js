// index.js将多个store融合到一个对象里面
import HomeStore from "./homeStore";
import OneStore from "./oneStore";

let oneStore = new OneStore();
let homeStore = new HomeStore();

const stores = {
  oneStore,
  homeStore,
};

export default stores;
