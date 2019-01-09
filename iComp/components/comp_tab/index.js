// components/comp_tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached() {
    console.log("itemData", this.properties.itemData)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _onTap() {
      let pageUrl = this.properties.itemData.pageUrl
      wx.navigateTo({
        url: pageUrl,
      })
    }
  }
})
