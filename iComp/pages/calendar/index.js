//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    days:[]
  },
  onLoad: function () {
    
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
