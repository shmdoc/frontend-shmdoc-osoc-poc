import router from '@/router'
import Vue from 'vue'

export const state = {
  jobs: [],
  runningJobs: []
}

export const mutations = {
  ADD_JOB(state, job){
    state.jobs.push(job)
    state.jobs.sort(function(a,b){
       return new Date(b.attributes.created) - new Date(a.attributes.created);
    });
  },
  ADD_RUNNING_JOB(state, job){
    let found = false
    state.runningJobs.forEach(runningJob => {
      if (runningJob.id === job.id) {
        found = true
      }
    })
    if (!found) {
      job.finished = false
      state.runningJobs.push(job)
    }
  },
  START_JOB(state, job){
    job.finished = false
    state.runningJobs.push(job)
  },
  FINISH_JOB(state, job){
    state.runningJobs = state.runningJobs.filter(j => j.id !== job.id)
    state.runningJobs.forEach(obj => {
      if (obj.id === job.id) {
        Vue.set(obj, 'finished', true)
      }
    })
    state.jobs.push(job)
  },
  STOP_JOB(state, job){
    state.runningJobs = state.runningJobs.filter(runningJob => runningJob.id !== job.id)
  },
}

export const actions = {
  getJobs({ commit }) {
    if (state.jobs.length == 0) {
      fetch('/schema-analysis-jobs')
        .then(response => response.json())
        .then(json => {
          json.data.forEach(job => commit('ADD_JOB', job))
        })
        .catch(error => console.log(error))
    }
  },
  getRunningJobs({ commit }){
    fetch('/schema-analysis-jobs')
      .then(response => response.json())
      .then(json => {
        json.data.forEach(job => {
          fetch(job.relationships.columns.links.related)
              .then(response => response.json())
              .then(response => {
                if (response.data.length === 0) {
                  commit('ADD_RUNNING_JOB', job)
                }
              })
              .catch(error => console.log(error))
        })
      })
      .catch(error => console.log(error))

  },
  createJob({ dispatch }, args){
    let file = args.file
    let source = args.source
    let d = new Date();
    let timestamp = d.toISOString();
    let data = {data: {
                        type: "schema-analysis-jobs",
                        relationships: {
                          file: {
                            data: { type: "files", id: file.data.id }
                          },
                          source: {
                            data: { type: "source", id: source }
                          }
                        },
                        attributes: {
                          created: timestamp
                        }
                      }
    }
    fetch('/schema-analysis-jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/vnd.api+json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
          dispatch('startJob', response.data)
        })
        .catch(error => console.log(error))
  },
  startJob({ commit }, job){
    commit('START_JOB', job)
    fetch('/schema-analysis-jobs/' + job.id + '/run')
        .then(response => response.json())
        .then(() => {
          commit('FINISH_JOB', job)
          router
          //router.push({ name: 'job', params: {id: job.id} })
        })
        .catch(error => console.log(error))
  },
  stopJob({ commit }, job) {
    fetch('/schema-analysis-jobs/' + job.id, {
          method: 'DELETE',
        })
        .then(() => {
          commit('STOP_JOB', job)
        })
        .catch(error => console.log(error))
  }
}

export const getters = {
  getJobById: state => id => {
    return state.jobs.find(job => job.id === id)
  }
}
