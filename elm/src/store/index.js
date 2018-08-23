import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state={
    username:'cc',
    age:10
}

const store =new Vuex.Store({
    state
});

export default store;