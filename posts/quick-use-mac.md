---
date: 2015-04-08
layout: post
title: 用了Mac OS一年多的总结
permalink: '/2015/quick-use-mac.html'
categories:
- mac
- Blog
tags:
- 快速使用Mac Os
---

前言
===
之前一直认为MAC是“小众“人使用，这些使用MAC 的人透着所谓的“文艺范”。从而导致MAC 给我留下的印象就是外表华丽（样子好看），内在空虚（功能和软件少），
不如Windows实用。但是自己开始用MAC一年以后这些观念就开始转变，并且一度认为MAC 才是开发人员最佳的开发平台，主要有以下几点（来源于网络）：

1、Mac OS X 是基于 Unix 的。这一点太重要了，尤其是对开发人员，至少对于我来说很重要，这意味着Unix 下一堆好用的工具都可以随手捡到。

2、开发环境。c/c++/java/perl/python/php/ruby/lisp，各种 shell，应有尽有，直接支持，非常方便。

3、编辑器 Vi/Emac。作为 程序员/IT 人员一个好用的编辑器太重要了，因为写程序/改系统配置都需要编辑器。

4、没有病毒/木马。用了1年多的 Mac 就没看到病毒长成什么样，我还看不到 Mac 上装杀毒软件的需要。

5、不需要维护。Mac 买来就直接用，磁盘碎片整理？不需要。装驱动？Mac 装好了，驱动就好了。重装系统？

6、简洁。Mac 上所有的操作都简洁到了极致，尽量避免干扰用户，增加了程序员的生产力。

7、多窗口切换。这个很方便管理打开的程序/文档。

8、漂亮的字体。windows cleanType 渲染出来满是锯齿的字体跟MAC 简直没法比。

目前公司已经开始给开发人员标配Mac Air,虽然配置相对与Mac Pro来讲有一定的差距，但是这些一点也不耽误享受以上几点的便利。
可是最近发现周围的很多同学之前都是一直使用windows,一下子换成Mac有些不习惯经常会遇到一些问题，
比如：MAC 上有自己需要的软件吗？开发环境如何搭建配置？等等。
所以我就萌发了写这篇blog的想法，把自己过去一年的一些经验和经常用的软件分享出来。

如果你第一次用Mac,并且属于啥都不知道的类型，那么我建议你先看下MAC的详细使用文档之后再来看这篇文章。Mac_OS 10.9操作说明（115M 图文并茂有些大）<a href="http://yunpan.taobao.com/s/1Eez8N33IMG" target="_blank">下载</a>

===========================系统方面===========================
===
Mac OS 与windows不同它是没有类似WINDOWS分区的概念的，跟LINUX 一样是存在挂载点的概念，也就是说按照目录来做不同的挂载。如果你的MAC 只有一块硬盘的话可以认为整个硬盘都是
挂载在根目录"/"上，系统文件和用户文件是不同的目录存放，所以就不用像用WINDOWS 那么纠结到底C 盘给多大？什么东西不能存在C 盘里等问题。



finder增强
---
finder 类似于windows 里的资源管理器（explorer.exe）,所有的文件操作都是通过finder来完成。但是系统自带的finder有些弱，所以如果要很好的使用finder需要给它增加插件。

目前finder的增强插件有2个XtraFinder 和totalfinder 。两者提供类似的Finder 的增强区别是XtraFinder为免费的而totalfinder是收费插件，经过试用发现totalfinder在稳定性
上略胜XtraFinder一筹。totalfinder 即使不交费也不影响功能使用只是会有注册提示的文案。

个人认为totalfinder比较好的几点：

1.类似WINDOWS 的复制粘贴
2.路径拷贝
3.隐藏显示系统文件
4.双屏切割
5.彩色图片标记

totalfinder 截图
<img src="http://img1.tbcdn.cn/L1/461/1/932fd490078bb9f175ffd0244d2578c5d2415b3c" width="770" height="770"/>



软件安装
---
刚用MAC OS 迷惑最多的是软件如何安装，像WINDOWS 那样直接EXE 安装文件一路下一步就行了。可是理解如何安装MAC 软件后你就会发现相比WINDOWS 安装软件容易的多。
MAC 上安装软件主要有以下几种：

1.官方AppStore安装，这种方法相对是最简单的，在AppStore 里选择你要的软件点击下载，输入用户名和密码（收费软件会扣费）剩下等走完进度条后就行了。但是这种方法
的问题就是APPLER 的服务器下载速度缓慢。

2.app类型程序安装，通过一些完整我们可以下载AppStore 里没有的软件，这类软件比较类似的都是xxx.app结尾的,这类应用程序其实就是个文件夹。这种类型软件可以直接将其拖到“/Applications"(应用程序目录，相当于windows的Program Files目录)即可。

<img src="http://img1.tbcdn.cn/L1/461/1/764b3cb4c25e66d13767fcbc0726943a136aa313" width="770"/>

值得注意的是非AappStore 下载的软件可能因为安全隐私设定无法运行，所以需要到系统偏好设置-》安全性与隐私-》通用，将允许从以下位置下载应用程序改成“任何来源”

<img src="http://img2.tbcdn.cn/L1/461/1/72774b952a03acac58357012afe46e926ae28251" width="770" height="770"/>

3.PKG 包安装，这类安装文件类似于Windows的.msi文件。一般这种类型的文件要么是不需要卸载，要么是自带卸载文件。对于PKG 产生的垃圾文件可以通过一款叫UninstallPKG的程序进行删除。

4.源码编译，这种类型主要是一些工具类型的软件，需要从软件官网下载SRC 源码回来在自己的机器上进行make，当然对于这类软件的安装需求也有对应的工具叫HomeBrew。

HomeBrew官网:<a href="http://brew.sh/index_zh-cn.html" target="_blank">http://brew.sh/</a>

安装比较简单一行命令即可完成HomeBrew的安装：
    
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

以安装 wget 为例：
    
    查找： brew search /wge*/（/wge*/是个正则表达式， 需要包含在/中）
    
    安装： brew install wget （自动下载SRC 并且进行编译然后完成环境变量配置）
    
    卸载： brew uninstall wget
    
    其他命令：
    
    brew list       列出已安装的软件
    
    brew update     更新brew
    
    brew home       用浏览器打开brew的官方网站
    
    brew info       显示软件信息
    
    brew deps       显示包依赖

软件卸载
---

1.软件自带卸载程序，比如搜狗输入法。

2.xxx.app类型程序（来源自己下载）这类程序般只要在“/Applications”目录下找到对应的程序的APP。直接挪到废纸篓里清空废纸篓即可。

3.AppStore 安装的可以在Lanuchpad （开启触摸板-更多手势中-Lanuchpad）对应要删除的程序按住鼠标，这个时候图标会晃动。只要点击
晃动图标左上角的x 即可删除对应程序，类似于IOS的删除程序的方式。

4.pkg 类型的程序可以利用UninstallPKG 这款收费软件进行卸载。

<img src="http://img2.tbcdn.cn/L1/461/1/cb5fa6fed640b7b1cf7cc9ed7ec6e976a29ddfb5" width="770" height="770"/>

5.强悍的mac清理软件CleanMyMac,类似于WINDOWS 上的WINDOWS 优化大师。除了清理垃圾缓存等功能外，还具有强大的软件卸载能力，自动分析软件依赖。只要将要卸载的软件拖到CleanMyMac即可,其他功能可以自行挖掘。

<img src="http://img3.tbcdn.cn/L1/461/1/66bf495ca3d27fef2ca061ab169d75ed92cb3049" width="770" height="770"/>



压缩解压缩
---

无论WINDOWS 也好MAC 也罢平时工作中离不开压缩文件。在MAC 上一些常用的压缩格式比如：zip 等自带的“归档实用工具”即可解压，但是类似RAR 这样的特殊格式必须要用
其他的程序来完成压缩和解压缩工作。

1.万能的betterzip,虽然名字里有ZIP 但是它也可以支持RAR，只需要在设置里程序助手中下载RAR 的命令行工具即可。其支持的格式也是非常多。

<img src="http://img2.tbcdn.cn/L1/461/1/f6da22ef264f6b3b43ea70ff76e566ce8b555138" width="770" height="770"/>

2.dropdmg,MAC上经常用来作为软件的压缩包格式就是DMG。系统默认是可以将DMG 进行MOUNT 方式进行读取，但是如果要自己制作DMG 压缩包用命令行非常复杂，这个软件就是可以利用拖拽的方式，将文件拖到它上面来制作自己的DMG 压缩包。

<img src="http://img4.tbcdn.cn/L1/461/1/f59c93b7508732fc5dab66685ac07a09d24d81ce" />



NTFS 分区写
---
在MAC 上我们经常会用一些移动硬盘和U 盘，这些存储多半是NTFS 分区格式的。这样你就会发现MAC 是可以NTFS 格式的存储。但是悲催的是无法去写NTFS 格式的存储。所以如果要在MAC 上对NTFS 分区格式的存储进行写操作的话，就必须通过外挂
的程序来实现。目前MAC 上NTFS 的外挂支持主要有两款软件，这两款软件都是收费软件，个人比较倾向于Paragon NTFS 用了这么久没出过问题。

1.Paragon NTFS 

2.Tuxera NTFS 

两款软件的NTFS 读写性能测评 <a href="http://www.zeninteractions.com/2010/03/31/tuxera-ntfs-vs-paragon-ntfs-mac-benchmarks" target="_blank">查看测评</a>



输入法
---
MAC 自带的拼音输入法已经不错了，但是缺少云词库。所以可以选择安装百度或者搜狗的输入法，两者之间差异不是很大词库都很类似，但是个人比较倾向于百度，原因是百度输入法切换速度比搜狗快。
另外一点就是搜狗输入法是PKG 的安装方式，卸载的话需要用安装DMG 包中的卸载程序进行卸载。



快速启动利器 Alfred
---
说到Alfred这个软件不得不说他是一个利器（如果MAC 没用Alfred可以说你MAC 白买了），从它最简单的功能是快速启动，其实它还有更牛逼的玩法。支持自己写Workflow完成一些很有创意的功能。由于其功能用法较多这里就不多做介绍，给大家
一个传送门可以自己去看下。值得一说的是Alfred 本身是免费使用，但是如果要使用Workflow的话必须升级为收费版本。

使用详细教程Alfred：<a href="http://bbs.feng.com/read-htm-tid-6860401.html" target="_blank">在线教程</a>

Alfred常用Workflow：<a href="http://www.waerfa.com/alfred-workflow" target="_blank">常用Workflow</a>

<img src="http://img4.tbcdn.cn/L1/461/1/ea49b85ee55287030745dd729b7937c3b03496f9" width="770" height="770"/>



粘贴板增强
---
Paste 是MAC 下的一款粘贴板增强工具，可以记录并且预览粘贴板记录，快速的在粘贴板记录里进行切换。使用也非常简单只要用command+shift+v就可以唤出。

<img src="http://img3.tbcdn.cn/L1/461/1/0dcde2a8ef0460639d3489bf33635495b26d2aca" width="770" height="770"/>



任务栏系统状态
---
iStat Menus 是一款常驻菜单栏右侧的小工具，通过该应用我们可以时刻了解自己 Mac 电脑上发生各种情况，比如查看硬件温度，查看即时网速以及查看内存和硬盘使用率等。
据说开发者为了完美兼容所有MAC（不同机型的传感器不一样），每次MAC 出新款都会自己购买新款的MAC 进行开发测试。所以基本该软件也可以算上装机必备吧。

<img src="http://img2.tbcdn.cn/L1/461/1/d45b305545f08ccfaa8b3a75b2b6cb4d4d981da9" width="770" height="770"/>



屏幕窗口调整
---
ShiftIt ：双窗口比对阅读等多窗口调整是很多人偶尔会用到的功能，使用 ShiftIt 可轻松用快捷键实现窗口管理：窗口占据上/下/左/右半屏，窗口最大化，当前窗口居中等操作均绑定快捷键

<img src="http://img3.tbcdn.cn/L1/461/1/a6d9765e8a3cd7dec6b1863f1b80d972fbfeb88b"/>



任务栏预览
---
HyperDock：一款能然Mac OS X 也具备Taskbar 和窗口自动排列功能。HyperDock 提供类似于Windows 7 Taskbar 的窗口预览的工具软件。

<img src="http://img3.tbcdn.cn/L1/461/1/88e72a5397792f9073dc37610f1bcade0d3e40b1" width="770" height="770"/>



媒体播放
---
MPlayerX：是一款Mac OS平台的强劲视频播放器，基于 Mplayer 强力后端，在性能上无可挑剔。比起同门 Mplayer OSX Extended 功能虽精简一些，但界面更优，方便操作。

<img src="http://img3.tbcdn.cn/L1/461/1/3c8cd8f7c82abbf4f989b4812c4766a8883190fa" width="770" height="770"/>

BINO:是一个免费的3D视频播放器，能播放3D立体视频，广泛支持各种格式，支持立体眼镜和多显示器。MAC上看3D 视频首选。

<img src="http://img1.tbcdn.cn/L1/461/1/32a0db8c4a02effb3e380d21c09c7b2b0f200c3a" width="770" height="770"/>

VOX:万能的音频播放器，类似于 windows 上的Winamp，Vox支持FLAC, MP3, AAC, Musepack, Monkey’s Audio, OGG Vorbis, Apple Lossless, AIFF, WAV, IT, MOD, XM, Games Music等大量音频格式。

<img src="http://img4.tbcdn.cn/L1/461/1/822b7bad97e42267bf3a57237ae90ab28451b150" width="770" height="770"/>

通过安装扩展VoxPrefs<a href="http://coppertino.com/addon" target="_blank">VoxPrefs扩展</a>，可以实现用键盘或者IPHONE 的耳机线控来控制播放。

<img src="http://img2.tbcdn.cn/L1/461/1/e5f35f93889811d0a2f6878061c50b3e7d8658e2" width="770" height="770"/>



下载工具
---
Thunder： 迅雷这个不多说众所周知的牛逼下载神器，MAC 版本已经支持迅雷会员的所有功能。

<img src="http://img3.tbcdn.cn/L1/461/1/d9764dae817cf32e74ac3dd43ab69fad31ec3fc5" width="770" height="770"/>

Transmit：是一款功能齐全，Mac用户必备的FTP客户端。其兼容于FTP，SFTP和TLS/SSL协议，提供比Finder更加迅速的iDisk账户接入。与此同时，用户还可以通过Transmit在任意应用程序中无须下载即可实时编辑文档，方便简洁，一步到位。
         
<img src="http://img4.tbcdn.cn/L1/461/1/f234348aed65879e128d7b33e246d69b02e3deb3" width="770" height="770"/>



时光机
---
Time Machine： 这个是Mac OS 自带的一个系统工具，类似于windows下的ghost。它可以把你整个MAC 按照时间进行备份到移动硬盘中，可以随时通过时光机获取历史版本的文件或者软件。也可在整个系统挂掉的情况下利用开机按住option键进入引导
选择从时光机完整恢复。这个功能对于我非常重要，曾经它救过我两次数据资料都没丢失。所以建议Mac 的用户都自备一块移动硬盘来当时光机。更多关于时光机的内容请看：<a href="http://bbs.zol.com.cn/nbbbs/d544_8216.html" target="_blank">Mac的神奇时光机</a>

但是注意一点，如果开启了时光机后，MAC OS 默认先在本地硬盘里进行备份等待移动硬盘连接后在做同步，这个功能好是好但是对于硬盘紧张的同学，这个同能就是个鸡肋。那么可以通过在终端中键入以下命令取消本地硬盘时光机的功能。

取消本地时光机备份：sudo tmutil disablelocal

开启本地时光机备份：sudo tmutil enablelocal

<img src="http://img1.tbcdn.cn/L1/461/1/81eae748f551b217aafd168afc0608da62a4a12a" width="770" height="770"/>



===========================日常办公===========================
===

OFFICE
---
说到日常办公，OFFICE 这个大家都经常使用，在MAC OS 的平台上微软也推出了自家的MAC 版本的OFFICE .目前最新版本Microsoft Office for Mac 2011 SP4 14.4.8（主要包含 word 2011,PowerPoint 2001 ,Excel 2001 Outlook 2001,MSN,远程桌面等）。

但是本人真心不推荐MAC 上使用MAC 版本的OFFICE至少是2011版本。原因很简单MAC 版本的2011的Office 并没有完全兼容WINDOWS 平台编辑的文档，经常会遇到格式乱掉。而且PowerPiont播放PPT 的时候也会有卡死情况。

<img src="http://img1.tbcdn.cn/L1/461/1/0b3dbcbbfad80c78c7bb75284456e7de9cccafb5" width="770" height="770"/>

不过本人建议如果只是看OFFICE 的文件或者很少写OFFICE 的文件可以使用苹果自家的IWORK 套件(PAGES,NUMBERS,KEYNOTE)。完全可以胜任日常的word,excel,powerPoint的需求。

<img src="http://img3.tbcdn.cn/L1/461/1/ae34c174e07dd12e304c23922a313d7e1c2ad17b" width="770" height="770"/>

如果你就是离不开OFFICE，并且经常使用OFFICE的话，建议2个选择：

1.用最新的微软 Office for Mac 2016 中文预览版会比2011好很多，不过还是预览版感兴趣可以试试。

2.安转虚拟机，在虚拟机中安装WINDOWS 版本的OFFICE，这样产出的OFFICE 文件在多个平台上交换格式绝对不会乱。



虚拟机
---
上面说到如果保持和WINDOWS 的OFFICE 一样的使用，那么就可以在MAC 中安装虚拟机。其实虚拟机作用远不止此很多MAC 上不支持的程序都可以通过虚拟机来运行。比如：XXX 的网银。

MAC OS 平台上的主流虚拟机软件主要有：Parallels Desktop,VMware Fusion,virtual box。 虽然这三个虚拟机软件都可以在MAC OX 平台上完成虚拟机相关的工作，但是我这里还是
要重点说下Parallels Desktop 这个虚拟机，因为只有它相对与MAC OS 的融合性是最好的，它提供融合模式可以方便的让你在MAC OS 中像操作本地MAC软件一样的方式运行WINDOWS 的程序
反之亦然，并且良好的文件交换方式，性能也是错。唯一美中不足的就是Parallels Desktop的价格不便宜，而且每个大版本的升级都需要重新购买。

<img src="http://img1.tbcdn.cn/L1/461/1/bbd16b5ab5e66214f325c2fe55b6c497e9e373bc" width="770" height="770"/>



PDF 阅读器
---
PDF 文件是经常用的一个文档形式之一，无论什么平台都少不了对它的需求。虽然MAC OS 自身的图片预览程序可以支持PDF 文件的查看，但是就阅读体验上来讲是很差的，所以可以尝试三方的PDF 阅读器。

PDF 的三方阅读器很多appStore里以PDF 为关键字搜索就由很多。但是我这里推荐的是Skim 这款软件，它比较小巧可以满足日常PDF 阅读的需求。最关键是免费开源的软件。

<img src="http://img1.tbcdn.cn/L1/461/1/333f0407139bae20d5b8840140db022d5df8be55" width="770" height="770"/>



CHM 阅读器
---
跟PDF 一样CHM 也是常见的文档形式，MAC OS 原生是不支持CHM 文件的读取。当然AppStore里以chm 关键字搜索。支持chm 的阅读器也很多，但是还是想推荐下Read CHM 这款阅读器。 跟其他的CHM 阅读器
一样支持CHM的阅读而且还可以导出成PDF 文件， 关键是免费，而且无乱码。算是比较好的一款CHM 阅读器了。

<img src="http://img4.tbcdn.cn/L1/461/1/c12e8b5102793c3f92d094f3320f7f5adc2e617a" width="770" height="770"/>



Windows 远程桌面
---
如果你也有从MAC 上远程到其他windows上工作的需求的话远程桌面肯定少不了，上面说到如果安装MAC 的OFFICE 的话会自动安装一个比较低版本的远程桌面。但是如果你不装MAC 的OFFICE 的话其实也可以直接
安装Microsoft Remote Desktop的。在appStore里搜索Microsoft Remote Desktop 即可（要求帐号是美国帐号）。



思维导图
---
windows上牛逼的思维导图工具xmind在MAC OS 上也有，所以思维导图需求可以直接使用XMind for mac。

<img src="http://img1.tbcdn.cn/L1/461/1/a567c7bce306cd8a9d6da24b50a678247e4fee29" width="770" height="770"/>

但是如果不考虑文件的平台交换的话，推荐MindNode Pro 这款思维导图工具，小巧简洁。

<img src="http://img2.tbcdn.cn/L1/461/1/009f03ff1bcc130ccd93e6e108119c0ab97cb227" width="770" height="770"/>



绘图软件
---

说到绘图软件MAC 上的OmniGraffle 当仁不让，它曾获得2002年的苹果设计奖，图标，流程图，组织结构图等等都可以用它来画。不过它价格不便宜，AppStore 上的售价就要648元，不是一般小贵。

<img src="http://img4.tbcdn.cn/L1/461/1/6b6231da0cf804d5ba61664c1f346cc3e654d9f0" width="770" height="770"/>



原型制作
---
做软件开发的就离不开原型的设计，在WINDOW 上原型DEMO 的设计有强悍的Axure RP Pro。而值得高兴的是Axure RP Pro 同样也有MAC 的版本。

<img src="http://img1.tbcdn.cn/L1/461/1/0422f8ee4ccb91479d7cb1ed84f6a17d271866d9" width="770" height="770"/>

当然处理老牌的原型工具，还有比较有特点的，比如卡通风格的原型工具Balsamiq Mockups。

<img src="http://img1.tbcdn.cn/L1/461/1/49499f11c9c9c1309163812762102ad7dfa09575" width="770" height="770"/>

项目流程管理
---

OmniGroup 是项目流程管理工具，类似于OFFICE 的PROJECT.可以帮助我们做项目计划管理，可以分析任务需要设置里程碑以及资源分配的等。

<img src="http://img2.tbcdn.cn/L1/461/1/198026ca1d2ae5d6e3a9a6511d41befe6d2a7e2f" width="770" height="770"/>

个人任务管理
---
OmniFocus Mac上最优秀的GTD效率工具，比较好用的个人任务管理工具。可以把要做的事情做成任务用这个软件来管理。

<img src="http://img2.tbcdn.cn/L1/461/1/5098ba8e00d6f46946b735970a360cc7e1c6c67d" width="770" height="770"/>

VPN
---

MAC VPN 的软件有很多，这里主要说下Cisco AnyConnect 因为我司用的就是Cisco的解决方案。Cisco AnyConnect Secure Mobility Client 这个软件安装不用多说
但是卸载一定要注意，必须使用程序自带的卸载程序进行卸载，千万不能用CleanMyMac之类的三方卸载工具卸载，因为本人就曾经因为用CleanMyMac卸载Cisco AnyConnect后
导致Cisco AnyConnect再也安装不了的困境，最后只能用时光机恢复系统。这点切记！

<img src="http://img3.tbcdn.cn/L1/461/1/b2ad28b6d62f8ca1c0ac9fdb2eae7821511a9adb" width="770"/>

<img src="http://img3.tbcdn.cn/L1/461/1/da5560e1d4bdb42bec13eb62776b0b965dfb343a" width="770"/>

即时通讯
---
即时通讯即聊天工具，WINDOWS 平台上主流的聊天工具都有对应的MAC 版本，比如微信，QQ，旺旺，钉钉等。这里就不多说了，但是还是要吐槽下MAC 版本的旺旺真的很烂。

===========================JAVA 开发相关===========================
===

等待补充中====
---




