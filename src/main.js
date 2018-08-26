// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css' //全局引用bootstrap
//import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'           //全局引用elementUI
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)  //VUE2.0的写法
    //components: {App}, //VUE1.0的写法
    //template: '<App/>'
});
