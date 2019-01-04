// components/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModal:{
      type:Boolean,
      observe(newVal) {
        console.log("newVal", newVal)
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
    _showModal:true
  },
  attached() {
    // 在组件实例进入页面节点树时执行
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hideModal:function() {
      console.log("点击")
      this.setData({
        _showModal:false
      })
    }
  }
})
