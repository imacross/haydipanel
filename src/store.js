import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import {router} from './router'  

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    token:"",
    fbApiKey:"AIzaSyD0gOZOi6KVlQt-lMhgdQI9-gs17isS7o0"
  },
  mutations:{
    setToken(state,token){
      state.token = token;
    },
    clearToken(state){
      state.token = ""
    }
  },
  actions:{
    initAuth({commit,dispatch}){
      let token = localStorage.getItem("token")
      console.log(token);

      if(token){
        commit("setToken",token);
        router.push("/gelen");
      }else{
        router.push("/auth")
        return false
      }
    },
    login({commit,dispatch,state},authData){
     return axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD0gOZOi6KVlQt-lMhgdQI9-gs17isS7o0",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(response => {
        commit("setToken",response.data.idToken);
        localStorage.setItem("token",response.data.idToken)

        dispatch("timeLog",+response.data.idToken)
      });
    },
    logout({commit}){
      commit("clearToken");
      localStorage.removeItem("token");
      router.push('/auth')
    },
    timeLog({dispatch},expiresIn){
      setTimeout(()=>{
        dispatch("logout");
      },660000)
    }
  },
  getters:{
    isAuth(state){
      return state.token !== "";
    }
  },
})

export default store;