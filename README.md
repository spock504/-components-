# wx_components
΢��С������������
## 1. calendar component . �������

![����ͼƬ](https://github.com/spock504/wx_components/blob/master/image/calendar.png)   
### ʹ��˵��  
``` javascript
<v-calendar days="{{days}}" bind:initDate="initDate" bind:changeDate="changeDate"></v-calendar>
```
  ����:  days��Array����,��ʾ��ǰ�·�,���пɴ��� days[3].choosed = true,��ʾĳһ����ʾΪΪѡ��״̬��  
  ��������: initDate ��������ʾ�����ʼ��ʱ�ĵ�ǰ�·�;������������,initYear �� initMonth��ʾ��ʼ��ʱ����,��;
            changeDate����:��ʾ�������ϵİ�ť,ѡ��ͬ���·�;ͬʱҲ������������,newYear �� newMonth��ʾ�仯�����,��
## 2. coupon component . �Ż�ȯ���  
![�Ż�ȯͼƬ](https://github.com/spock504/wx_components/blob/master/image/coupon.png) 
### ʹ��˵��  
``` javascript
<v-coupon couponsList="{{couponsList}}"></v-coupon>
```
����:couponsList ��Array����,discount:�����ʾ������,name:�м���ʾ������,startTime,endTime ��ʼ�ͽ�����ʱ��,  
    status��ʾ�Ż�ȯ��״̬:  0:��ʹ��;1:��ʹ��;2:�ѹ���.  
## 3. btmModel component . �ײ��������  
### ʹ��˵��  
``` javascript
<v-btmModel showModal="{{isShowModal}}">
  <view>��������</view>
  <view>������������1������;2������</view>
</v-btmModel>
```
#### ����:isShowModal ��Boolean����,���Ƶ�������ʾ������



