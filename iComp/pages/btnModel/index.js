//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShowModal:false
  },
  onLoad: function () {
    
  },
  showModel:function() {
    this.setData({
      isShowModal:true
    })
  }
})
