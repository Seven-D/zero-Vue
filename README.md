# zero-vue

> Zero to a Vue.js project 从零学习搭建VUE项目

## Build Setup

``` bash
# install dependencies 依赖安装
npm install
#淘宝镜像安装(临时）
npm --registry https://registry.npm.taobao.org install express

#淘宝镜像永久配置
npm config set registry https://registry.npm.taobao.org
配置后可通过下面方式来验证是否成功 
npm config get registry
或 
npm info express
之后可以用npm install进行快速安装

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
##开始步骤
```bash
一、本机安装Webstorm和node.js（新版已包含有npm），并配置node.js的环境变量，全局可用。
二、确认node和npm是否安装配置正确：
   打开系统命令行cmd，执行以下指令查看：
   node -v 看node版本，
   npm -v  看npm版本。
三、安装VUE脚手架vue-cli,也就是vue命令行方式工具：
      1、最新版本的确认：npm show vue-cli    列出了所有版本并指明了最新版本
      2、选择版本并安装：npm install -g vue-cli@2.9.6   -g代表全局安装 ，@后面指定版本号
      3、确认已安装版本：vue -V     注意是大写V
      4、使用帮助：   vue -h
      5、涉及的命令挺少的：
          init 初始化一个新的项目或者APP（基于模板，从零自己编就没意义了，对开发效率也影响）
          list 查看可用的（官方）模板
          build 发布，打包发布
          help  帮助文档了  可以试试 vue help init
四、建立vue标准的webpack模板工程
       vue init webpack zero-vue  新建了一个以webpack为模板的工程,工程名zero-vue
       确认项目名 (可以修改）Enter
       确认描述   （可以修改）Enter
       确认 作者  （可以修改）Enter
       安装路由库  YES  Enter
       是否使用ESline  （是否使用ESline代码规范检查，其实很烦）NO  Enter
       是否使用单元测试	（暂时不用）NO  Enter 
       是否使用e2e  	（暂时不用）NO   Enter
       选用 运行时+编译器  Enter
       等下载安装完成。
五、一个标准的webpack模板VUE项目建好了。
   cd zero-vue到项目目录中
   npm run dev运行DEMO页：http://localhost:8080
六、运行WebStorm,打开该项目zero-vue，开始开发吧~~~!之后的操作都是在WebStorm中即可。
```
##安装第三方库
 * 安装bootstrap4  二选一
 * 安装elementUI   二选一
 * －－－－－－－－－－－－－－－－－－－－－
 * 安装axios 二选一
 * 安装Nginx 二选一（后期用来转发请求到后台服务器）
```bash
我选择全都安装，玩玩又如何？
一、安装bootstrap4
   1、在webstorm中打开命令行终端，默认路径就是当前工程路径；
   2、npm install bootstrap --save --save-exact  安装bootstrap
二、安装axios
   npm install --save --save-exact axios vue-axios
   安装两个内容：axios本库，以及vue-axios这个是axios封闭的VUE组件，可简化代码使用
三、安装elementUI
   npm i element-ui -S 官方的安装指导
四、安装Nginx
   step 1: 下载安装 
     
   sudo apt-get update
   sudo apt-get install nginx
   
   step 2: 配置参数
   
   配置：在http里面添加：   
   server {
   listen 8000;
   server_name localhost;
   location / {
           root /home/hadoop/Projects/code-clone-frontend;
           index index.html;
   }
   }
   其中：/home/hadoop/Projects/code-clone-frontend为项目的工作目录，8000为端口号。
   这个东西还不理解，现在先暂时不装吧。
   
```
##代码的开始
根据别人的教程，主要是用element了，当然也可以同时用bootstrap（我想）……

* package.json文件很重要，这里主要管理各依赖包及其版本。
  看dependencies段，这是我们用的全局依赖，可以把版本号前的^号去掉，以指定版本，以防后期更新后影响生产环境。
```bash
一、在main.js中引入组件
    import 'bootstrap/dist/css/bootstrap.min.css' //全局引用bootstrap
    import 'bootstrap/dist/js/bootstrap.min.js'
    import ElementUI from 'element-ui'           //全局引用elementUI
    import 'element-ui/lib/theme-chalk/index.css'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    
    Vue.use(ElementUI);
    Vue.use(VueAxios,axios);
    
二、建立导航页
    1、
    
```
