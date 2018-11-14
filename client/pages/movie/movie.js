// pages/movie/movie.js
Page({

  onCache() {
    // 异步的方法
    // 存储
    // wx.setStorage({
    //   key: "name",
    //   data: {
    //     p1: "May"
    //   },
    //   success() {
    //     console.log('存储名字成功')
    // 获取
    //     wx.getStorage({
    //       key: "name",
    //       success: (data) => {
    //         console.log(data)

    //       }
    //     })
    //   }
    // })

    // 同步的方法
    // 存储
    wx.setStorageSync("names", "Hurley");
    // 获取
    let ns = wx.getStorageSync("names")
    console.log(ns)

  }

})