import Vue from 'vue'
import Vuex from 'vuex'
import * as jobs from '@/store/modules/jobs.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadedFiles: [],
  },
  mutations: {
    ADD_FILE(state, file){
      state.uploadedFiles.push(file)
    },
  },
  actions: {
    uploadFile({ commit, dispatch }, file){
      let data = new FormData()
      data.append('file', file)
      fetch('/files', {
          method: 'POST',
          body: data
        })
        .then(response => response.json())
        .then(file => {
          commit('ADD_FILE', file)
          dispatch('createJob', file)
        })
        .catch(error => {
          console.log(error)
          alert("Something went wrong when uploading file")
        })
    },
  },
  modules: {
    jobs
  }
})
