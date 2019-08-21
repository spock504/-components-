// components/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModal:{
      type:Boolean,
      observer(newVal) {
        this.setData({
          _showModal: newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _showModal:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideModal:function() {
      this.setData({
        showModal:false
      })
    },
    // 防止遮罩层点击事件
    preventTouchMove:function(){}
  }
})
