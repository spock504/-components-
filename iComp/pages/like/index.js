//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    like: true,
    count: 10
  },
  onLoad: function() {

  },

  // 点击事件
  onLike(event) {
    let like_or_cancel = event.detail.behavior
    console.log("like_or_cancel", like_or_cancel)
  }
})