import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadedFiles: [],
    jobs: []
  },
  mutations: {
    ADD_FILE(state, file){
      state.uploadedFiles.push(file)
    },
    ADD_JOB(state, job){
      state.jobs.push(job)
    }
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
    createJob({ commit }, file){
      console.log("Creating job for: " + file.data.id)
      let d = new Date();
      let timestamp = d.toISOString();
      let data = {data: {
                          type: "schema-analysis-jobs",
                          relationships: {
                            file: {
                              data: { type: "files", id: file.data.id }
                            }
                          },
                          attributes: {
                            created: timestamp
                          }
                        }
      }
      fetch('/schema-analysis-jobs/' + file.data.id, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/vnd.api+json'
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(error => console.log(error))
      commit("ADD_JOB", "Job: " + file.data.id)
    }
  },
  modules: {
  }
})
