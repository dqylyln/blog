---
date: 2013-04-22
layout: post
title: 利用xively.com监控Raspberry Pi的Load和温度
permalink: '/2013/use-cosm.html'
categories:
- RaspberryPi
- Blog
tags:
- Raspberry Pi
---

前言
===

在RaspberryPi搭建博客后发现个问题，就是我如何能够知道RaspberryPi的一些运行信息，比如CPULoad或者温度。初步想法是利用图表形式汇总信息，然后
通过网页图表展示。该方案主要有以下几个关键点：

1.打点，将收集的信息进行打点，通常是将数据写入文件。

2.收集打点数据文件，然后分析出数据内容。

3.根据分析结果，进行画图用于展示。

而针对以上几点来看让Raspberry Pi去打点没什么问题，收集打点数据分析内容，利用分析结果画图展示这个两条如果让RaspberryPi来做的话有些浪费本地资源，
本身Raspberry Pi的资源就有限如CPU。所以如果可以将打点数据上传到第三方的服务中，让第三方分析并且画图展示岂不是更好。所以，参考了一粟同学的方案。
利用[xively.com](https://xively.com) 提供的服务来进行数据收集和描点画图。

xively账户准备
===

1.[注册账户](https://xively.com/signup/)，因为需要邮箱收取激活邮件，所以需要填写正确的邮件地址。（激活邮件到达比较慢，至少我是等了半天才收到激活邮件）

2.添加一个设备

* 菜单上develop， 然后点击Add Device

<img src="http://cdntest.aliyun.com/faxianla/wood/mt1368624872171.png" width="600" height="600"/>

* 提交后会得到Feed ID，Feed URL，API Endpoint相关信息，后续API使用要用。

<img src="http://cdntest.aliyun.com/faxianla/wood/mt1368625058391.png" width="600" height="600"/>

*设置API的密钥 在API Keys选择添加一个API,设置属性Read，Create，Update，Delete，标签随便命名。

<img src="http://cdntest.aliyun.com/faxianla/wood/mt1368625265417.png" width="600" height="600"/>

到此为止你的FEED相关需要的东西经创建好了，有空的话可以看下创建成功页面下的一些示范API的连接，支持JAVA，CURL等。这里主要用CURL

xively http API
===

上面已经创建好了数据的FEED，剩下的就是向这个FEED里提交数据了，这里用的是[CURL API详情](https://xively.com/dev/docs/api/data/write/multiple_datapoints_to_multiple_data_streams)


1.数据格式（JSON）

    {
        "datastreams": [
            {
                "id": "load",
                "current_value": "9.00"
            },
            {
                "id": "temp",
                "current_value": "89.15"
            }
        ]
    }

每条线的点的数据结构是KEY-VALUE形式，其中id代表是这个点属于线的ID(自己定义有意义的名称 如Load)，current_value是指这个点的VALUE。
推荐一个在线的JOSN格式化和校验工具 [jsoneditoronline](http://www.jsoneditoronline.org/)

2.提交数据

cosm提供了HTTP的API方式

    URL: https://api.xively.com/v2/feeds/${FEED_ID}?timezone=+8

    HEAD：需要增加X-ApiKey：${apiKey}

    putData:上面的JSON数据

浏览器调试
====

利用chrome的一个插件叫[Dev Http Client](https://chrome.google.com/webstore/detail/dev-http-client/aejoelaoggembcahagimdiliamlcdmfm/details?utm_source=chrome-ntp-icon), 在连接地址里填入API的地址其中feed_id换成你真实的FEED_ID

如：https://api.xively.com/v2/feeds/80400859?timezone=+8

启用HEADERS 添加一个X-ApiKey 的KEY VALUE就是你的APPKEY.

BODY 处填写需要发送的JSON数据，方式选择PUT

点击发送即可，RESPONSE 处会显示200表示y成功 。如下图：

<img src="http://cdntest.aliyun.com/faxianla/wood/mt1366633121092.png" width="600" height="600"/>

这个时候访问下 https://xively.com/feeds/80400859 这个地址就可以看到刚才PUT过去的数据就OK了代表你的API已经调试OK.

<img src="http://cdntest.aliyun.com/faxianla/wood/mt1368625828856.png" width="600" height="600"/>

准备SHELL打点脚本
===

1.cpuLoad 数据收集

    cat /proc/loadavg | awk '{print $2}'`

2.CPU温度 数据收集

    cat /sys/class/thermal/thermal_zone0/temp | awk '{print $1/1000}'

通过以上2条命令就可以查看当前的CPU对应的LOADE和温度，下面就需要将收集到的数据组装成cosm的API需要的JSON格式在PUT给cosm就可以了。

下面是脚本的例子：

    #!/bin/bash

    LOCATION='/home/pi/sysdata'   #生成JSON文件路径,替换成你的路径
    API_KEY='l9eHDf_fLzQx9Qfc8hCVrIan9DOSAKxrN21EOTdyL1IxST0g' #API使用的KEY,替换成你的KEY
    FEED_ID='126908' #提交数据的FEED,替换成你的FEED_ID
    ####################################################

    COSM_URL=https://api.xively.com/v2/feeds/${FEED_ID}?timezone=+8
    cpu_load=`cat /proc/loadavg | awk '{print $2}'`

    for i in 1 2 3 4 5; do
            cpu_t=`cat /sys/class/thermal/thermal_zone0/temp | awk '{print $1/1000}'`
            if [[ "${cpu_t}" =~ ^- ]]
            then
                    cpu_t='0.0'
            else
                    echo ${cpu_t}
                    break
            fi
    done

    STR=`awk 'BEGIN{printf "{\"datastreams\":[ {\"id\":\"load\",\"current_value\":\"%.2f\"}, {\"id\":\"temp\",\"current_value\":\"%.2f\"}] } ",'$cpu_load','$cpu_t'}'`

    echo ${cpu_t}
    echo ${cpu_load}
    echo ${STR}
    echo ${STR} > ${LOCATION}/cosm.json
    curl -s -v --request PUT --header "X-ApiKey: ${API_KEY}" --data-binary @${LOCATION}/cosm.json ${COSM_URL}

 修改脚本中需要替换成你自己的三个变量LOCATION，API_KEY，FEED_ID 之后 赋予改脚本文件 755权限并且运行。

 例如：该脚本名称testSys.sh

    chmod 755 testSys.sh
    ./testSys.sh

可以看到以下结果:

<img src="http://cdntest.aliyun.com/faxianla/wood/mt1366706378183.png" width="600" height="600"/>

将打点脚本添加到CRONTAB中
===

    crontab -e

    1 * * * * /home/pi/sysdata/testSys.sh>/dev/null 2>&1 & #每一分钟运行一次/home/pi/sysdata/testSys.sh

页面引入图表
===

在需要暂时图表的地方加入以下代码：

    <img src="https://api.xively.com/v2/feeds/${FEED_ID}/datastreams/${LINE_ID}.png?width=340&height=180&colour=%23f15a24&duration=2days&title=${TITLE}&show_axis_labels=false&detailed_grid=true&scale=&timezone=8"/>

${FEED_ID}:替换成你创建FEED的ID，上个例子中就是126908

${LINE_ID}:替换成你FEED里具体LINE的ID，上个例子中就是load或者temp

${TITLE}  :图表展示上的标题,可以自己按照需要命名，比如CPU的LOAD

经过以上步骤就可以将你的PI上的CPU的LOAD还有温度数据采集到放到cosm展示，其他原理类似如统计在线人数等需求都可以用这个cosm的服务来实现。