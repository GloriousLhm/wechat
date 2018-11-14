//app.js
// 注册app
// 会得到一个程序的实例，可以被其他页面访问
App({

  // 在小程序运行期间，之后运行一次
  // 程序销毁（过了一段时间没有运行，或者手动删除了小程序，再次添加运行）之后，再次启动就好执行
  onLaunch: function() {

    console.log("小程序启动了")


  },

  onShow() {
    console.log("切换到小程序运行了")
  },
  // 切换到后台
  onHide() {
    console.log("小程序被隐藏在后台运行")
  },
  globalData: {
    userInfo: null
  }
})