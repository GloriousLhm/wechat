//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  // 页面加载的时候执行，只会执行一次
  onLoad: function() {
    console.log("onLoad --logs")
  },
  //  页面第一次渲染完成之后，只会执行一次
  onReady() {
    console.log("onLoad -- logs")
  },
  // 页面显示了就会执行
  onShow() {
    console.log("onShow --logs")
  },
  // 页面隐藏旧就会执行
  onHide() {
    console.log("onHide --logs")
  },
  // 页面卸载就会执行，只会执行一次
  onUnLoad() {
    console.log("onHide --logs")
  }
})