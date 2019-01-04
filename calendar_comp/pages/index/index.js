//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    days:[]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 初始化显示页面的数据
  initDate:function(e){
    let initYear = e.detail.initYear
    let initMonth = e.detail.initMonth
    let days = e.detail.days
    // 在这边判断当前月份 的选中状态
    days[3].choosed = true
    console.log("e==>", initYear, initMonth, days)
    this.setData({
      days
    })
  },
  // 改变月份后显示 的状态
  changeDate:function(e) {
    // 获取组件传递上来的年月时间戳
    let newYear = e.detail.newYear
    let newMonth = e.detail.newMonth
    let days = e.detail.days
    // 在这边判断当前月份 的选中状态
    // 现在是默认每个月的的第二天都是选中
    days[1].choosed = true

    console.log("e==>", newYear, newMonth, days)
    this.setData({
      days
    })
  }
})
