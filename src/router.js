import Home from './Home'
import Gelen from './Gelen'
import Yonet from './Yonet'
import Auth from './Auth'
import store from './store'
import Diger from './Diger'
import YonetimXL from './YonetimXL'
import YonetimClass from './YonetimClass'
import RezervasyonXL from './RezervasyonXL'
import RezervasyonClass from './RezervasyonClass'
import Form from './Form'
export const routes = [
  {
    path:'/',
    component:Home,
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()
      }else{
        next("/auth")
      }
    }
  },
  {
    path:'/gelen',
    component:Gelen,
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()
      }else{
        next("/auth")
      }
    }
  },
  {
    path:'/form',
    component:Form,
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()
      }else{
        next("/auth")
      }
    }
  },
  {
    path:'/diger',
    component:Diger,
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()
      }else{
        next("/diger")
      }
    }
  },
  {
    path:'/yonet',
    component:Yonet,
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()
      }else{
        next("/auth")
      }
    }
  },
  {
    path:'/auth',
    component:Auth,
  },
]