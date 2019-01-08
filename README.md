# wx_components
微信小程序的组件开发
## 1. calendar component . 日历组件
![日历图片](https://github.com/spock504/wx_components/blob/master/images/calendarImg.png)   
### 使用说明  
``` javascript
<v-calendar days="{{days}}" bind:initDate="initDate" bind:changeDate="changeDate"></v-calendar>
```
####  属性:
    days：Array类型,表示当前月份,其中可传入 days[3].choosed = true,表示某一天显示为为选中状态。  
#### 两个方法: 
    initDate 方法：表示组件初始化时的当前月份;传递两个参数,initYear 和 initMonth表示初始化时的年,月;
    changeDate方法:表示点击组件上的按钮,选择不同的月份;同时也传递两个参数,newYear 和 newMonth表示变化后的年,月
## 2. coupon component . 优惠券组件  
![优惠券图片](https://github.com/spock504/wx_components/blob/master/images/couponImg.png) 
### 使用说明  
``` javascript
<v-coupon couponsList="{{couponsList}}"></v-coupon>
```
#### 属性:
    couponsList ：Array类型,discount:左边显示的文字,name:中间显示的名称,startTime,endTime 开始和结束的时间,  
    status表示优惠券的状态:  0:可使用;1:已使用;2:已过期.  
## 3. btmModel component . 底部弹窗组件  
![底部弹窗图](https://github.com/spock504/wx_components/blob/master/images/btmModelImg.png) 
### 使用说明  
``` javascript
<v-btmModel showModal="{{isShowModal}}">
  <view>弹窗内容</view>
  <view>哈哈哈哈哈；1个和尚;2个和尚</view>
</v-btmModel>
```
#### 属性:
    showModal ：Boolean类型,控制弹窗的显示和隐藏



