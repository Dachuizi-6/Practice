import JsonP from "jsonp";
export default class Axios {
  // 以下方法实现了给一个网址，在项目中实现调用
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          params: "callback",
        },
        function (err, response) {
          //   debugger;
          if (response.status === "1") {
            resolve(response);
          } else {
            reject(response.info);
          }
          //   console.log(response);
        }
      );
    });
  }
}
