
/* 引入库模块 */
import Vue from 'vue';
import {Button} from 'mint-ui';

/* 引入文件模块 */
import App from './App.vue';
import router from './router';
import store from './store';

// 注册全局组件标签
Vue.component(Button.name, Button)    // <mt-Button>

new Vue({
  el: '#app',
  render: h => h(App),
  router,     // 使用vue-router
  store       // 使用vuex
})