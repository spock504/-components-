// components/charPie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    chartData: Array,
    pieRadius: {
      type: Number,
      value: 100,
      observer(newVal, oldVal) {
        this.setData({
          canvasSize: newVal * 2
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    canvasSize: 200
  },

  lifetimes: {
    attached: function() {
      const {
        chartData
      } = this.data;
      this.drawPieChart(chartData);
      // this.animationDraw();
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    calPieAngle(chartData) {
      // 计算数据总和
      let count = 0;
      chartData.forEach((item) => {
        count += item.data;
      });

      // 计算出开始的弧度和所占比例
      let startAngle = 0;
      return chartData.map((item) => {
        item.proportion = item.data / count;
        item.startAngle = startAngle;
        startAngle += 2 * Math.PI * item.proportion;
        return item;
      });
    },
    drawPieChart(chartData) {
      let pieChartData = this.calPieAngle(chartData);
      const { pieRadius } = this.data
      const context = wx.createCanvasContext('chartpie', this) // 组件中使用cnavas需要指定this
      context.setLineWidth(2);
      context.setStrokeStyle('#ffffff');
      pieChartData.forEach((item) => {
        context.beginPath();
        // 设置填充颜色
        context.setFillStyle(item.color);
        // 移动到原点
        context.moveTo(pieRadius, pieRadius);
        // 绘制弧度
        context.arc(pieRadius, pieRadius, pieRadius, item.startAngle, item.startAngle + 2 * Math.PI * item.proportion);
        context.closePath();
        context.fill();
        context.stroke(); // 画白线
      });
      context.draw();
    },
    animationDraw (){
      const duration = 1000
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          console.log("onPregress")
        },
        onAnimationFinish: function onAnimationFinish() {
          console.log("finish")
        }
      });
    } 
  }
})