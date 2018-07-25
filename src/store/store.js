import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import axios from 'axios';
// import data from './data.json';

export default new Vuex.Store({
    state: {
        students: []
    },
    getters: {},
    actions: {
        getStudents({ commit }) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(r => r.data)
            .then(res => {
                commit('setStudents', res)
            })
        }
    },
    mutations: {
        setStudents(state, res) {
            state.res = res
        }
    }
})