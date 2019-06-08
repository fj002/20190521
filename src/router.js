import Vue from 'vue'
import Router from 'vue-router'
import MSite from './views/MSite/MSite'
import Order from './views/Order/Order'
import Profile from './views/Profile/Profile'
import Search from './views/Search/Search'
import Login from "./views/Login/Login";


Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },{
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },{
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },{
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },{
      path:'/',
      redirect:'/msite'
    },{
      path:'/login',
      component:Login


    }
  ]
})
