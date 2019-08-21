//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    couponsList:[
      {
        "discount":"￥50",
        "name":"满150减50",
        "usableCondition":"全店适用",
        "startTime":"2018-12-29",
        "cutOffTime":"2019-01-02",
        "status":0
      },
      {
        "discount": "￥50",
        "name": "满150减50",
        "usableCondition": "全店适用",
        "startTime": "2018-12-29",
        "cutOffTime": "2019-01-02",
        "status": 1
      },
      {
        "discount": "￥50",
        "name": "满150减50",
        "usableCondition": "全店适用",
        "startTime": "2018-12-29",
        "cutOffTime": "2019-01-02",
        "status": 2
      }
    ]
  },
  onLoad: function () {
    
  },
})
