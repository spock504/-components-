// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[
      {
        "name":"日历",
        "imgurl":"/images/icon1.png",
        "pageUrl": "/pages/calendar/index"
      },
      {
        "name": "优惠券",
        "imgurl": "/images/icon2.png",
        "pageUrl": "/pages/coupon/index"
      },
      {
        "name": "底部弹窗",
        "imgurl": "/images/icon3.png",
        "pageUrl": "/pages/btnModel/index"        
      },
      {
        "name": "喜欢Or不喜欢",
        "imgurl": "/images/icon4.png",
        "pageUrl": "/pages/like/index"        
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})