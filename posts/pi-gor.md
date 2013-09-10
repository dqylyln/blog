---
date: 2013-04-11
layout: post
title: 利用GOR在Raspberry Pi上搭建博客
permalink: '/2013/pi-gor.html'
categories:
- RaspberryPi
- Blog
tags:
- Raspberry Pi
---

前言
===

Pi入手后就想在上面搭建一个博客，之前首先想到的是一些现成的解决方案如Wordpress，rubyonrails等等，但是随着入手后的一些折腾,发现Pi的CPU
的性能真的不咋地，如果让本来就弱的CPU再负责渲染动态页面的话，结果可想而知。

所以思路就需要转变一下，如果是HTML的静态页面的话，一些耗费资源的功能，如图床，评论等，都以云服务的方式放到公网上，那么以Pi的硬件配置应该问题不大。

为什么选择GOR
---

经过上面的分析，Pi上搭建博客首选是静态页面方案，但是纯HTML搭建起来的话将是个费时费力的活。有没有更好的方案呢，参考了[一粟](http://hugozhu.myalert.info)的GO+GOR
方案，我觉得这个是我想要的东东。

安装GOR
===

gor 是使用golang实现的类Ruhoh静态博客引擎(Ruhoh like),基本兼容ruhoh 1.x规范. 相当于与ruhoh的官方实现(ruby实现)

有以下优点:

速度完胜 – 编译wendal.net近200篇博客,仅需要1秒

安装简单 – 得益于golang的特性,编译后仅一个可运行程序,无依赖


安装Golang([Golang官网](http://golang.org))
===

1.安装Mercurial(GOOGLE惯用mercurial做版本管理)

    sudo apt-get install mercurial

2.检出GO的代码，注意Pi是ARM平台不能用主干的代码，需要用TIP分支

    hg clone -u tip https://code.google.com/p/go

一顿漫长等待，可以看到PI的CPU很高，如果实在不行可以在PC机器上HG出来源码，FTP发到Pi上。

3.编译源码并且安装

    cd go/src (进入源码目录)
    ./all.bash (运行编译安装脚本)

整个编译安装过程会很漫长，要所有TEST都通过后GO才算安装成功。

注意：如果安装报错，尝试用TIP分支的其他版本，之前就遇到了这个坑，最新的TIP是无法编译通过的（看来GOOGLE的程序员也会缺少自测就提交代码）。

附HG回滚：

    hg revert -r 15749:e92503ce815b --all (我是使用15749:e92503ce815b 这个版本没问题)

安装GOR（[Gor官网](https://github.com/wendal/gor)）
===

1.用go安装gor

    go get -u github.com/wendal/gor
    go install github.com/wendal/gor/gor

2.设置GOPATH

    GOPATH=/home/pi/mygo （仅供参考 mygo是我建立的一个目录专门放GO的工程）

建立BLOG站点
===

    gor new blog (会在指定的命令目录下生成BLOG的站点目录)

创建博客文章
===

    cd blog
    gor post "goodday" (即可生成 post/goodday.md文件, 打开你的markdown编辑器即可编写)

编译博客
===

在blog站点目录下执行

    gor compile

这样会在你的blog站点目录下生成compiled目录，里面的内容就是编译后的静态文件

本地预览
===

在blog站点目录下执行

    gor http

浏览器输入http://xxxx:8080 （xxx为你PI的IP）,就可以看到结果

GOR站点的基本配置
===

*打开站点根目录下的site.yml文件

    1.填入title, 作者等信息
    2.填入邮箱等信息

*打开站点根目录下的config.yml文件

    1.设置production_url为你的网站地址, 例如 http://wendal.net 最后面不需要加入/ 生成rss.xml等文件时会用到
    2.summary_lines 首页的文章摘要的长度,按你喜欢的呗
    3.latest 首页显示多少文章

*打开widgets目录, 可以看到基本的挂件,里面有config.yml配置文件

    1.analytics 暂时只支持google analytics, 填入tracking_id（可不填）
    2.google_prettify 代码高亮,一般不修改
    3.comments 暂时只支持disqus, 请填入short_name

注意：comments需要到 [disqus](http://disqus.com) 注册个账号，然后申请个short_name，这样GOR就会为你的博客集成disqus的
评论功能。

安装nginx
===

gor http 命令只能提供开发调试功能，对于server side include这样类似于显示客户端IP等功能就无能为力了，所以要用nginx

安装：

    sudo apt-get install nginx

添加虚拟主机

    sudo vi /etc/nginx/sites-enabled/default

添加内容

    server {
        server_name dqy.me;
        root /home/pi/blog/compiled; #站点编译静态文件所在目录
        location / {
            ssi on;
        }
    }

这样只要在页面上增加以下代码，就可以显示客户端IP了

    <!--# echo var="remote_addr" default="no" -->

重启Nginx
===

    sudo /etc/init.d/nginx restart

参考：
===

[在Pi和Github上搭建自己的个人博客](http://hugozhu.myalert.info/2013/02/27/%E5%9C%A8Pi%E5%92%8CGithub%E4%B8%8A%E6%90%AD%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2.html)