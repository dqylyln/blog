+++
author = "dqylyln"
title = "DSM搭建的Bitwarden密码管理服务"
slug = "DSM_Witch_Bitwarden"
date = "2023-06-20"
description = "利用NAS搭建私有的Bitwarden服务，替代1password！"
categories = [
    "DSM",
    "Bitwarden"
]
tags = [
    "Bitwarden"
]
image = "https://h.dqy.me:1077/pub/b/2024/04/07/202404071946361.jpg"
+++

# 背景

曾几何时，对于个人密码经常是一个密码走天下，各大网站app全部使用同一个密码，带来的风险就是任何一个网站出现漏洞导致密码泄露，其他网站的账号也出现风险。 但是如果每个网站都设置一个独立的密码，面对成百上千个网站密码，人脑记忆肯定是不靠谱的。 所以这个时候就需要密码管理软件来统一管理密码
![密码管理软件示意图](https://h.dqy.me:1077/pub/b/2024/04/07/202404071956900.png)

市面上的密码管理软件很多，比如最开始mac 平台上的1password（1password8 开始支持其他平台）和Bitwarden 等。 1password跟苹果生态结合比较好，支持本地密码库的icloud 同步，但是从1password8开始取消了本地密码库，强推自家的云存储，吃相难看不说而且密码的存储放到三方云存储始终不放心，而Bitwarden 虽然也是支持自家云存储，但是有开源的vaultwarden 三方服务器的实现，完美的兼容了Bitwarden 的所有平台客户端，并且vaultwarden也支持自并且支持1password一键导入。所以在1password7 停止维护后 使用vaultwarden 搭建自己的Bitwarden服务，结合Bitwarden的客户端是个不错的替代选择
![私有化部署Bitwarden方案示意图](https://h.dqy.me:1077/pub/b/2024/04/07/202404071959466.png)

## Vaultwarden服务端搭建

Vaultwarden 是一个使用 Rust 编写的非官方 Bitwarden 服务器实现，它与官方 Bitwarden 客户端兼容，对于不希望使用官方的占用大量资源的自托管部署而言，它是理想的选择。开源地址：[https://github.com/dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden)

搭建Vaultwarden的方式可以有很多，比如常见的docker，但是如果是DSM的话，有大拿已经将Vaultwarden 服务做成了DMS 的套件，可以通过套件中心一键安装。下面主要描述DSM7 下的Vaultwarden 搭建。

### 添加三方套件源
在DSM的套件中心-》设置-》套件来源-》新增,添加三方套件源[https://spk7.imnks.com/](https://spk7.imnks.com)

![DSM三方套件](https://h.dqy.me:1077/pub/b/2024/04/07/202404072006254.png)
markup
### 安装Vaultwarden
套件中心-》搜索Vaultwarden进行安装，安装后启动即可，默认http服务端口是8507
![启动Vaultwarden](https://h.dqy.me:1077/pub/b/2024/04/07/202404072007536.png)

### 设置反向代理
由于Vaultwarden 要求必须是https的协议，一般两种做法1是给Vaultwarden配置证书，2是通过dsm 自带的nginx，将外部https 请求代理到http 的8507端口上，推荐是选择后者好处是，证书可以跟DSM系统证书一起更新，不至于证书到期要给每个服务单独替换证书。
打开DSM的控制面板-》登录门户-》高级-》反向代理，添加 https 的8508 端口到localhost http 的8507的代理。 这样就可以通过https://xxx:8508的方式进行访问 Vaultwarden
![DSM方向代理](https://h.dqy.me:1077/pub/b/2024/04/07/202404072009867.png)

### 设置端口转发
如果需要互联网同步密码库，就需要将服务暴露到公网，当然如果只是在内网同步使用，这个步骤可以忽略。 由于每个路由器的端口转发设置不同，但是原理大同小异，都是将https 服务的8508端口，通过wan的自定义端口对外暴露，这里就不展开了。

### 创建Vaultwarden账号
浏览器访问搭建好的服务，用邮箱进行账户创建，邮箱作为登录的id来使用，这里注意主密码一定要记住，后面是用主密码来解锁密码管理软件，进行网站密码填充的。
![账号注册-1](https://h.dqy.me:1077/pub/b/2024/04/07/202404072012202.png)
![账号注册-2](https://h.dqy.me:1077/pub/b/2024/04/07/202404072012808.png)

用户创建成功后，就可以在自己的密码库里创建密码了
![创建密码库](https://h.dqy.me:1077/pub/b/2024/04/07/202404072013974.png)

### 导入1password 的密码
如果你需要把之前1password 的密码导入到Vaultwarden，那么就按照下面步骤进行，如果没有需要从1password 导出密码到Vaultwarden 的需求可以忽略这步。
* 1passowrd 导出:
1password 选中文件》导出-》所有项目
![1password-导出](https://h.dqy.me:1077/pub/b/2024/04/07/202404072015862.png)

输入1password 主密码后，选择导出.1pif文件
![1password-保存文件](https://h.dqy.me:1077/pub/b/2024/04/07/202404072016298.png)

* Vaultwarden导入:
浏览器打开Vaultwarden 的web 服务页面， 工具-》导入数据-》选择1pif 文件格式-》选择1pasword 导出的data.1pif文件，导入即可。
![Vaultwarden-导入](https://h.dqy.me:1077/pub/b/2024/04/07/202404072017082.png)

# 客户端配置
Vaultwarden 支持使用Bitwarden 各种平台的客户端以及各种浏览器插件，其配置大同小异，各种客户端列表见：[https://bitwarden.com/download/](https://bitwarden.com/download/)

下面以chrome 浏览器插件配置作为示例：
安装chrome 插件：[https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)

![chrome插件](https://h.dqy.me:1077/pub/b/2024/04/07/202404072030215.png)

点击Bitwarden 插件，在区域里选择自托管

![自定义托管](https://h.dqy.me:1077/pub/b/2024/04/07/202404072031173.png)

## 客户端使用

### 密码生成
在某网站需要注册的时候，可以点击插件，在弹出的页面里，选择自动生成用户名或者自动生成密码
![密码生成](https://h.dqy.me:1077/pub/b/2024/04/07/202404072033499.png)

生成密码的策略可以灵活自定义
![密码自定义](https://h.dqy.me:1077/pub/b/2024/04/07/202404072034022.png)

### 密码填充
在访问密码库中的网站，点击插件输入主密码，插件会自动从密码库里查找对应网站的密码进行填充。
![密码填充](https://h.dqy.me:1077/pub/b/2024/04/07/202404072035901.png)

# Alfred集成
Alfred是mac os 平台上非常好用的快速启动工具，通过它可以快速的启动应用，脚本等。 尤其是1password 的Alfred 插件，可以实现一键快速打开网站，并且自动填充用户名和密码的功能，那么切换到Bitwarden 是否也有Bitwarden和Alfred的插件实现这些功能呢？ 答案是肯定的。

先看效果：直接回车密码自动复制到粘贴板，shfit+回车就是用默认浏览器打开对应网站，并且填充用户名密码。

![Alfred](https://h.dqy.me:1077/pub/b/2024/04/08/202404081440974.png)


## 集成步骤

### 下载bitwarden alfred workflow插件:
到[https://github.com/blacs30/bitwarden-alfred-workflow/releases](https://github.com/blacs30/bitwarden-alfred-workflow/releases) 下载bitwarden-alfred-workflow.alfredworkflow 文件
![下载插件](https://h.dqy.me:1077/pub/b/2024/04/08/202404081443360.png)

### 安装bitwarden alfred workflow插件:
下载后双击bitwarden-alfred-workflow.alfredworkflow 进行安装（要求已经安装好Alfred 5+ 版本）
![安装插件](https://h.dqy.me:1077/pub/b/2024/04/08/202404081444572.png)

### 安装Bitwarden CLI 命令行工具:
因为alfredworkflow 是调用Bitwarden CLI  命令行工具实现功能，所以要先安装Bitwarden CLI 。 它的安装方式有很多，详见：https://github.com/bitwarden/cli#downloadinstall 这里推荐使用Homebrew 进行安装，打开macos 的命令行终端，
输入安装命令：
```shell
brew install bitwarden-cli
```
### 配置alfredworkflow 环境变量:
需要修改的环境变量有3个：
EMAIL： Vaultwarden 注册账户的email
SERVER_URL： 自建Vaultwarden 服务器的https 的url eg：https://xxx.com:8508
WEBUI_URL:自建Vaultwarden 服务器的https 的url eg：https://xxx.com:8508
更多环境变量解释见：[https://github.com/blacs30/bitwarden-alfred-workflow#advanced-features--configuration](https://github.com/blacs30/bitwarden-alfred-workflow#advanced-features--configuration)

![环境变量-1](https://h.dqy.me:1077/pub/b/2024/04/08/202404081449392.png)
![环境变量-2](https://h.dqy.me:1077/pub/b/2024/04/08/202404081450774.png)

### 使用alfredworkflow
快捷键唤出alfred，输入.bwauth 选择login to Bitwarden,按照提示输入主密码即可。
![登录](https://h.dqy.me:1077/pub/b/2024/04/08/202404081451698.png)

输入.bwconfig sync 同步服务端密码库（第一次同步会有点慢）
![同步密码](https://h.dqy.me:1077/pub/b/2024/04/08/202404081452160.png)

输入.bwauto 选择install 设置定时同步,默认是10小时同步一次
![定时同步](https://h.dqy.me:1077/pub/b/2024/04/08/202404081452819.png)

以上都完成后，输入.bw就可以愉快的玩耍了。
![完成配置使用](https://h.dqy.me:1077/pub/b/2024/04/08/202404081453613.png)
接回车密码自动复制到粘贴板，shfit+回车就是用默认浏览器打开对应网站，并且填充用户名密码。

### APIKEY 登录(可选)
如果担心环境变量里指定用户email 有安全问题，可以使用apikey 的方式登录，使用apikey 方式登录不需要设置EMAIL的环境变量。

* 生成APIKEY
登录Vaultwarden web控制台,点击右上角头像，选择账户设置。
![账户设置](https://h.dqy.me:1077/pub/b/2024/04/08/202404081455560.png)

在账户设置总，选择安全-》秘钥，选择查看秘钥
![查看秘钥](https://h.dqy.me:1077/pub/b/2024/04/08/202404081456433.png)

输入主密码后，即可得到client_id 和client_secret
```angular17html
client_id:
user.xxx-xxxx-xxxx-xxxxxx-xxxxxxxx

client_secret:
xxxxxxxxxx
```
* 设置alfredworkflow 使用apikey 方式登录 

alfredworkflow 进入环境变量设置，删除EMAIL 变量配置的email 值，修改USE_APIKEY 变量为true 即可。 配置完成后输入.bwauth 登录，按照提示输入client_id  和client_secret 即可。


# 后记
Bitwarden 客户端支持的平台非常多，并且主流浏览器的插件也很丰富，使用方法大同小异，其他平台的客户端可以自行摸索使用。最终都能实现密码管理在自己的服务器上，多个平台多个设备可以实现一个主密码来管理所有网站密码，简单快捷，方便安全。
