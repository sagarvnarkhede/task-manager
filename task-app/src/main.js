import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
//import Vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib';
import router from './router'
import _ from "lodash";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(Vuetify);

Vue.prototype._ = _;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify({
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#7b3ab7", //Vuetify Standard Color
          "content-area-background-color": "#f2ebf6"
          
        }
      }
    }
    
  }),
  render: h => h(App)
}).$mount('#app')
