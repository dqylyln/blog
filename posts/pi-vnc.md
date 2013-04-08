---
date: 2013-04-08
layout: post
title: Raspberry Pi 配置VNC
permalink: '/2013/pi-vnc.html'
categories:
- RaspberryPi
- Blog
tags:
- Raspberry Pi
---

今天一个同事问我是否能远程访问RaspberryPi的桌面环境，当时一口回答VNC，至于咋搞一直没尝试过，因为我一直认为Raspberry Pi上搞X的话，性能真
是惨不忍睹。但是本着探索的精神今天还是尝试了下顺便记录了下过程。

安装 tightvncserver
===

    sudo apt-get isntall tightvncserver

启动VNC Server
===

    vncserver

设定访问密码,会出现两次，之后会询问一个只读密码，n跳过

客户端连接
===

![](http://www.tightvnc.com/logo/tightvnc-logo-90x90.png)

tightvnc的客户端有很多平台的，可以根据需要下载 [下载连接](http://www.tightvnc.com/download.php)

安装好客户端后，输入要连接RaspberryPi的地址以及端口(默认端口是5901) 就可以连接了

当然你也可以让RaspberryPi上的VNC的SERVER默认启动，那么可以参考以下方法。

设定开机启动(如果你愿意)
===

准备开机启动脚本
---
    sudo /etc/init.d/tightvncserver

*下面是脚本内容

    #!/bin/sh

    ### BEGIN INIT INFO
    # Provides:             tightvnc
    # Required-Start:       $remote_fs $syslog
    # Required-Stop:        $remote_fs $syslog
    # Default-Start:        2 3 4 5
    # Default-Stop:         0 1 6
    # Short-Description:    Start VNC Server as a service
    ### END INIT INFO

    VNCUSER='pi'
    eval cd ~${VNCUSER}

    case "$1" in
        start)
            su ${VNCUSER} -c '/usr/bin/tightvncserver :1'
            echo "Starting TightVNC server for ${VNCUSER}"
            ;;
        stop)
            pkill Xtightvnc
            echo "Tightvncserver stopped"
            ;;
        *)
            echo "Usage: /etc/init.d/tightvncserver {start|stop}"
            exit 1
            ;;
    esac

    exit 0

修改启动脚本权限
---

sudo chmod 755 /etc/init.d/tightvncserver

添加到开机启动
---

sudo update-rc.d tightvncserver defaults


