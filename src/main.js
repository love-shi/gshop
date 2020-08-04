
/* 引入库模块 */
import Vue from 'vue';

/* 引入文件模块 */
import App from './App.vue';
import router from './router';

new Vue({
  el: '#app',
  render: h => h(App),
  router
})