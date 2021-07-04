import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  created(){
    AOS.init({duration:'1500', disable: function() {
      var maxWidth = 600;
      return window.innerWidth < maxWidth;
    }});
  },
  router,
  render: h => h(App)
}).$mount('#app');
