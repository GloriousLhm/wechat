//index.js
//获取应用实例
const app = getApp()
let arr1 = ["mate", "ming", "LIU", "HUGO"]
let arr2 = [{
    id: Math.random(),
    name: "mate"
  },
  {
    id: Math.random(),
    name: "ming"
  },
  {
    id: Math.random(),
    name: "LIU"
  },
  {
    id: Math.random(),
    name: "HUGO"
  },
]

Page({
  data: {
    name: "May",
    people: {
      n1: 111,
      n2: 222
    },
    names: arr2,
    name1: "Maat,let,arr,hoe"
  },

  // tab之间的切换不会让页面重新加载，也就不会卸载，只会隐藏显示
  // 在进行navigatorTo,跳转到的那个页面会被重新加载（Load），跳转之前的页面会被隐藏
  // 回退（navigatorBack）,目标页面会Show(不是加载)，会退之前的页面会被卸载（inload）

  // 页面加载的时候执行，只会执行一次

  onLoad: function () {
    console.log("index --load")
  },
  //  页面第一次渲染完成之后，只会执行一次
  onReady() {
    console.log("index -- onReady")
  },
  // 页面显示了就会执行
  onShow() {
    console.log("index --onShow")
  },
  // 页面隐藏旧就会执行
  onHide() {
    console.log("index --onHide")
  },
  // 页面卸载就会执行，只会执行一次
  onUnLoad() {
    console.log("index --onUnLoad")
  },
  onTap(event) {
    console.log("我是谁");
    console.log(event)
  },
  onGetUserInfo(ev) {
    console.log(ev)
  },
  onTry(e) {
    console.log("尝试获取用户信息")
    wx.getUserInfo({
      success: msg => {
        console.log(msg, "success");

      },
      fail: e => {
        console.log(e, "fail");

      }
    })
  },
  onAuthLocation() {
    wx.authorize({
      scope: "scope.userLocation",
      success: msg => console.log(msg, "location success"),
      fail: e => console.log(e, "location fail")


    })
  },
  getAuthLocation() {
    wx.getLocation({
      success: msg => console.log(msg, "位置"),
      fail: e => console.log(e, '未获取到')


    })
  },
  onGetSetting() {
    wx.getSetting({
      success: msg => console.log(msg, "授权相关信息"),
      fail: e => console.log(e, '未获取到授权相关信息')
    })
  },
  onGotoSetting() {
    wx.openSetting({
      success: msg => console.log(msg, "设置完成"),
      fail: e => console.log(e, '设置未完成')
    })
  },
  onReq() {
    wx.showLoading({
      title: "请求中"
    })
    wx.request({
      // url: "http://localhost:3000/hello",
      data: {
        name: "May Liu",
      },
      method: "POST",
      success: res => {
        console.log(res.data)
        setTimeout(() => {
          wx.hideLoading()
        }, 1000)

        // 反馈
        // wx.showToast({
        //   title: "请求已经成功了"
        // })
      }
    })
  }

})