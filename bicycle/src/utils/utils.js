export default {
  formateDate(time) {
    if (!time) return "";
    let formateTime = new Date(time);
    return (
      formateTime.getFullYear() +
      "-" +
      (formateTime.getMonth() + 1) +
      "-" +
      formateTime.getDate() +
      "  " +
      (formateTime.getHours().toString()[1]
        ? formateTime.getHours()
        : "0" + formateTime.getHours()) +
      ":" +
      (formateTime.getMinutes().toString()[1]
        ? formateTime.getMinutes()
        : "0" + formateTime.getMinutes()) +
      ":" +
      (formateTime.getSeconds().toString()[1]
        ? formateTime.getSeconds()
        : "0" + formateTime.getSeconds())
    );
  },
};
