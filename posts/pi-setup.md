---
date: 2013-04-06
layout: post
title: Raspberry Pi 开机与设置
permalink: '/2013/pi-setup.html'
categories:
- RaspberryPi
- Blog
tags:
- Raspberry Pi
---

硬件需求
===

1.Pi主机一个

2.Pi支持的SD卡或者TF卡+SD卡套
（Pi对于SD卡是有要求的，某些品牌和型号的SD卡无法引导）<br/>
详见：[SD卡支持列表](http://pan.baidu.com/share/link?shareid=173551&uk=1529595879)

3.USB键盘和鼠标

4.支持视频或者HDMI的显示器或者电视机 (安装好系统配置后就没什么用，除非你用Pi做桌面工作环境)

5.5V 500mh的Micro USB充电器一个

启动SD卡制作
===
Pi使用的SD卡可以看做是它的硬盘，系统是是安装到SD卡上的。

1.到[www.raspberrypi.org](http://www.raspberrypi.org/downloads)下载系统镜像
可选择的系统镜像有Raspbian，Arch Linux ARM RISC OS等，经过网友测试Raspbian “wheezy”
貌似现在性能比较好。

2.利用PC将下载解压后的img文件写入到SD卡中，不同的PC平台写入方法不同<br/>
MAC为例：利用DD工具

* 插入卡 Raspberry Pi 使用手册 在终端窗口中输入”df –h”您会发现多了 一个“/dev/disk1s1”的设备

* 卸载卡 终端窗口输入“sudo diskutil unmount /dev/disk1s1”,然后输入您的系统密码

* 设备名称变换 将您的设备名(例 如/dev/disk1s1)最后的 s1 去掉,然后在 disk 前面加上 r,变成” /dev/rdisk1”,
这样您就得到 SD 卡的原始设备名称了。 也就是说,”/dev/disk1s1” = “/dev/rdisk1”

* 用DD命令写入 sudo dd bs=1m if=2013-02-09-wheezy-raspbian.img of=/dev/rdisk1
或者用RPi-sd card builder 这个APP写入 [下载连接](http://alltheware.wordpress.com/2012/12/11/easiest-way-sd-card-setup/)

其他平台SD卡制作方法详见：[Raspberry Pi中文手册](http://pan.baidu.com/share/link?shareid=173464&uk=1529595879)

连接设备
===

按照以下图片接口位置连接设备（USB键盘，鼠标，SD卡，网线，电视机或者显示器）
<img src="http://files.leiphone.com/uploads/2012/08/raspberry-pi-3-1024x680.jpg" width="600" height="600"/>

HDMI支持开启，这个坑害我折腾半天，因为 Raspbian对于HDMI默认没有启用。如果你使用的是HDMI连接显示设备就要多一个步骤。

* 开启HDMI，修改SD开中的config.txt文件里的参数，hdmi_safe的设置改成1

    hdmi_safe=1

设别连接好就可以开机了，如果没什么问题开机后显示器上会显示Raspberry Pi的设置页面
<img src="http://files.leiphone.com/uploads/2012/08/firstscreen.png" width="600" height="600"/>

* info 顾名思义，显示PI的一些配置信息

* expand_rootfs 将SD卡系统的根目录扩展到整个SD卡，因为镜像只有2G左右，如果使用2G以上的SD卡，如果不使用
该工具就会显示整个SD卡的容量只有2G

* overscan 图像显示扩充，如果你的显示器图像无法扩展到整个屏幕，整个选项需要开启图像就会拉伸到显示器满屏

* configure_keyboard 键盘配置，树莓派默认使用英国键盘，我们的键盘一般是美国布局的。所以要在Other，然后在里面选择English（US）
到了：Use Control+Alt+Backspace to terminate the X server? 时，选择Yes，表示用这个可以终止X Server，当整个X-Window死掉的时候可以用。

* change_pass 更改用户密码，默认用户为pi无法修改，密码为raspberry 所以这里为了安全还是修改成自己的密码

* change_timezone 设置时区，因为LINUX莫有北京时区所以就选择Asia – Shanghai吧

* change_locale 设置编码，建议安装zh_CN.UTF-8,还有en_us.GBK-UTF-8这两个，默认设置en_us.GBK-UTF-8

* memory_split 内存分配，这里可以将内存划分给显存，如果跑图形或者高清播放这里要设置128M，如果纯文字的SERVER这里设置成最小即可。

* ssh 时候激活ssh，一般当图形页面出现问题时候，可以通过SSH登录过去进行修复，整个还是开这吧。

* boot_behaviour 启动的时候时候默认进入图形界面，不使用图形建议关闭，这很损耗性能。

设置完成后，选择Finish，会提示是否重启，选择Yes。重启后即可进入图形页面。

![](http://ww1.sinaimg.cn/bmiddle/45895cd5jw1e386e16uw5j.jpg)


设置临时IP(如果您的网络是自动获取 IP 地址的话,此时已经能够上网了,如果不行在进行这步骤设置)
===

需要先设置个临时性的网络配置，主要为了之后安装VIM编辑器，修改系统文件就是持久配置了

ifconfig eth0 xxx.xxx.xxx.xxx netmask 255.255.255.0

route add default gw yyy.yyy.yyy.yyy

ifconfig eth0 up

注意： xxx.xxx.xxx.xxx yyy.yyy.yyy.yyy为你所在环境的IP以及网关

如果配置没问题，可以ping www.taobao.com就可以PING通

跟新APT的源列表

apt-get update

安装VIM

apt-get install vim

配置持久IP
===

vim /etc/network/interfaces

去掉 inface eth0 inet dhcp 动态DHCP的配置修改成以下

inface eth0 inet static

address xxx.xxx.xxx.xxx

gateway yyy.yyy.yyy.yyy

netmask 255.255.255.0

注意： xxx.xxx.xxx.xxx yyy.yyy.yyy.yyy为你所在环境的IP以及网关

保存退出

重启网络

sudo service networking restart

更换了一个更加快速的源：
===

pi的源列表: http://www.raspbian.org/RaspbianMirrors
测试了之后发现这个源在国内更新最快
http://mirror.devunt.kr/raspbian/raspbian/

更换源:

sudo vi /etc/apt/sources.list

更换为以下代码：

deb http://mirror.devunt.kr/raspbian/raspbian/ wheezy main contrib non-free rpi

图形界面下安装中文支持还有输入发

-安装文泉字体
sudo apt-get install ttf-wqy-zenhei

-安装拼音输入发
sudo apt-get install scim-pinyin

-修改默认系统编码为zh_CN.UTF-8
sudo raspi-config

然后选择change_locale，在Default locale for the system environment:中选择zh_CN.UTF-8

然后重启机器，就发现整个环境变成中文的了。

开启FTP
===

安装vsftpd服务器 (约400KB)

sudo apt-get install vsftpd

启动ftp服务

sudo service vsftpd start

编辑vsftdp的配置文件

sudo vi /etc/vsftpd.conf

找到以下行，修改成以下形式，如果有注释放开注释的#号即可

anonymous_enable=NO

表示：不允许匿名访问

local_enable=YES

设定本地用户可以访问。

write_enable=YES

设定可以进行写操作

local_umask=022

设定上传后文件的权限掩码。

存盘退出

重启vsftpd服务

sudo service vsftpd restart

系统测试
===
如果对于你的Raspberry Pi的具体性能感兴趣的话，可以给你的Raspberry Pi做个系统测评。

我们用的是UnixBench 这个工具

    curl http://byte-unixbench.googlecode.com/files/unixbench-5.1.2.tar.gz -o unixbench-5.1.2.tar.gz
    tar zxvf unixbench-5.1.2.tar.gz
    cd unixbench-5.1.2
    make
    ./Run

注意:如果没有图形的话，要在Makefile里注释掉X的测试

\#GRAPHIC_TESTS = defined

测试结果

    ========================================================================
       BYTE UNIX Benchmarks (Version 5.1.2)

       System: raspberrypi: GNU/Linux
       OS: GNU/Linux -- 3.6.11+ -- #371 PREEMPT Thu Feb 7 16:31:35 GMT 2013
       Machine: armv6l (unknown)
       Language: en_US.utf8 (charmap="ANSI_X3.4-1968", collate="ANSI_X3.4-1968")
       15:31:42 up 51 min,  2 users,  load average: 0.32, 0.33, 0.41; runlevel 2

    ------------------------------------------------------------------------
    Benchmark Run: Mon Apr 01 2013 15:31:42 - 15:59:52
    0 CPUs in system; running 1 parallel copy of tests

    Dhrystone 2 using register variables        1667613.1 lps   (10.0 s, 7 samples)
    Double-Precision Whetstone                      270.4 MWIPS (10.0 s, 7 samples)
    Execl Throughput                                256.0 lps   (29.9 s, 2 samples)
    File Copy 1024 bufsize 2000 maxblocks         45717.2
     KBps  (30.1 s, 2 samples)
    File Copy 256 bufsize 500 maxblocks           14782.9 KBps  (30.0 s, 2 samples)
    File Copy 4096 bufsize 8000 maxblocks        104151.9 KBps  (30.0 s, 2 samples)
    Pipe Throughput                              185870.4 lps   (10.0 s, 7 samples)
    Pipe-based Context Switching                  24193.6 lps   (10.0 s, 7 samples)
    Process Creation                                831.9 lps   (30.0 s, 2 samples)
    Shell Scripts (1 concurrent)                    469.8 lpm   (60.1 s, 2 samples)
    Shell Scripts (8 concurrent)                     60.0 lpm   (61.0 s, 2 samples)
    System Call Overhead                         377382.3 lps   (10.0 s, 7 samples)

    System Benchmarks Index Values               BASELINE       RESULT    INDEX
    Dhrystone 2 using register variables         116700.0    1667613.1    142.9
    Double-Precision Whetstone                       55.0
            270.4     49.2
    Execl Throughput                                 43.0        256.0     59.5
    File Copy 1024 bufsize 2000 maxblocks          3960.0      45717.2    115.4
    File Copy 256 bufsize 500 maxblocks            1655.0      14782.9     89.3
    File Copy 4096 bufsize 8000 maxblocks          5800.0     104151.9    179.6
    Pipe Throughput                               12440.0     185870.4    149.4
    Pipe-based Context Switching                   4000.0      24193.6     60.5
    Process Creation                                126.0        831.9     66.0
    Shell Scripts (1 concurrent)                     42.4        469.8    110.8
    Shell Scripts (8 concurrent)                      6.0         60.0    100.0
    System Call Overhead                          15000.0     377382.3    251.6
                                                                       ========
    System Benchmarks Index Score                                         102.1


到此为止，你的Raspberry Pi 已经具备了Linux系统以及独立的IP,可以SSH过去，FTP传文件，剩下的自己折腾吧。
====

