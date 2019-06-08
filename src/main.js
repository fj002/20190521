/*import 'babel-polyfill'
if (Number.parseInt()===undefined) Number.parseInt=window.parseInt();
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Swipe, SwipeItem} from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h=>h(App)
}).$mount('#app')
