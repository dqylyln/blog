---
date: 2013-04-06
layout: post
title: 初试Raspberry Pi
permalink: '/2013/pi-frist.html'
categories:
- RaspberryPi
- Blog
tags:
- Raspberry Pi
---

什么是Raspberry Pi（树梅派）
---

Raspberry Pi是一款基于Linux系统的个人电脑，配备一枚700MHz的处理器，512内存，支持SD卡和Ethernet，拥有两个USB接口，
以及 HDMI和RCA输出支持。。。。。太多了具体还是直接[百科](http://baike.baidu.com/view/5730914.htm)吧。

<img src="http://www.ickey.cn/images/raspberry/ras14.jpg" width="600" height="600"/>

UK与China版本的区别(当初购买的时候，我也迷惑了一阵)
---
Raspberry Pi 目前分UK版本还有China版本，两者的区别如下：
<table class="table table-bordered table-striped table-condensed">
    <tr>
        <td>版本</td>
        <td>电路板</td>
        <td>内存</td>
    </tr>
     <tr>
         <td>UK</td>
         <td>绿色</td>
         <td>三星</td>
     </tr>
      <tr>
          <td>China</td>
          <td>红色</td>
          <td>现代</td>
      </tr>
</table>
其实两个版本最重要的不同点就是内存，至于是该选三星的还是选现代的内存大家心里应该有数吧。另外Raspberry Pi的系统之前对于China版本的现代
内存兼容有些问题需要手工打补丁，不过目前最新的Raspberry Pi的系统对于China版本的现代内存都已经兼容了。

Raspberry Pi的购买
---
购买途径有很多，淘宝商城以及XXX渠道，由于淘宝商城里只卖国产的苦于自己的三星内存情节，所以选择了国内官方授权代理商ICkey购买了UK版本的

![ ](http://www.ickey.cn/uploads/data_ickey/3D2868243A90F067F7E938C586D273D7.jpg)

[直达IC-KEY 购买连接](http://www.ickey.cn/groupbuy.php?ick_sno=ICKEY00033)（这个套餐算下也很划算，就是快递顺丰 22元有点小贵，建议多个同学一起买）

为什么需要散热片
---
先看下Raspberry Pi的三大散热部分的分布

![Raspberry Pi 发热部分](http://ww4.sinaimg.cn/mw600/53e51344jw1dwqa06p3yej.jpg)

这些发热部分有些温度会高达60度，所以加装散热片还是有必要的。

Raspberry Pi 开箱照
---
经过2天的等待，终于收到了IC-KEY发过来的Raspberry Pi 先上个PP秀下开箱照以及拼装好的靓照。
![开箱照](http://ww4.sinaimg.cn/bmiddle/45895cd5jw1e381wpva05j.jpg)

这里给大家提个醒，亚克力的外壳看起来漂亮，但是实际上很脆弱尤其是卡脚处，安装的时候一定要小心，切勿暴力安装。附上安装图

![](http://img03.taobaocdn.com/imgextra/i3/839475955/T2sRbbXX8bXXXXXXXX_!!839475955.png)

组装工作完成后，剩下就是准备系统加电开机了，见下一篇博文 [Raspberry Pi 开机与设置](/2013/pi-setup.html)。