// pages/chart/pie/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartData: [{
        data: 15,
        name: '成交量1',
        color: '#7cb5ec'
      },
      {
        data: 35,
        name: '成交量2',
        color: '#f7a35c'
      },
      {
        data: 63,
        name: '成交量3',
        color: '#41affc'
      },
      {
        data: 78,
        name: '成交量4',
        color: '#434348'
      },
      {
        data: 63,
        name: '成交量5',
        color: '#90ed7d'
      },
    ],
    pieRadius: 80 // 圆的半径单位为 px
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})