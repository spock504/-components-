// components/charPie/index.js
import Animation from '../../utils/animation'
import util from '../../utils/util'
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
      new Animation({
        timing: 'easeInOut',
        duration: 750,
        onProcess: (process) => {
          this.drawPieChart(chartData, process);
        }
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    drawPieChart(chartData, process) {
      const context = wx.createCanvasContext('chartpie', this) // 组件中使用cnavas需要指定this
      const pieChartData = this.calPieAngle(chartData, process); // 计算开始角度和比例
      const maxTextLength = this.getPieTextMaxLength(pieChartData, context) // 计算文本最大长度

      const {
        pieRadius
      } = this.data
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

    calPieAngle(chartData, process) {
      let total = 0;
      chartData.forEach((item) => {
        total += item.data;
      });
      // 计算出开始的弧度和所占比例
      let startAngle = 0;
      return chartData.map((item) => {
        item.proportion = item.data / total * process;
        item.startAngle = startAngle;
        startAngle += 2 * Math.PI * item.proportion;
        return item;
      });
    },
    getPieTextMaxLength(pieChartData, context) {
      let maxLength = 0
      pieChartData.forEach((item) => {
        const text = util.tofixed(item.proportion, 2) + '%'
        maxLength = Math.max(maxLength, context.measureText(text).width);
      })
      // console.log("maxLength", maxLength)
    }
  }
})