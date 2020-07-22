import Vue from 'vue'
import Vuex from 'vuex'
import * as jobs from '@/store/modules/jobs.js'
import * as sources from '@/store/modules/sources.js'
import * as units from '@/store/modules/units.js'

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
    uploadFile({ commit, dispatch }, args){
      let file = args.file
      let data = new FormData()
      data.append('file', file)
      fetch('/files', {
          method: 'POST',
          body: data
        })
        .then(response => response.json())
        .then(file => {
          commit('ADD_FILE', file)
          dispatch('createJob', {file, source: args.source})
        })
        .catch(error => {
          console.log(error)
          alert("Something went wrong when uploading file")
        })
    },
  },
  modules: {
    jobs,
    sources,
    units
  }
})
