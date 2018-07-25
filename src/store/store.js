import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import axios from 'axios';
// import data from './data.json';

export default new Vuex.Store({
    state: {
        data: []
    },
    getters: {},
    actions: {
        getStudents({ commit }) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                commit('setStudents', res)
            })
        }
    },
    mutations: {
        setStudents(state, res) {
            state.data = res
        }
    }
})