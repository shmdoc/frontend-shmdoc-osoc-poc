import router from '@/router'

export const state = {
  jobs: [],
  newJobs: [],
  startedJobs: []
}

export const mutations = {
  ADD_JOB(state, job){
    state.jobs.push(job)
  },
  ADD_NEW_JOB(state, job){
    state.newJobs.push(job)
  },
  START_JOB(state, job){
    state.newJobs.filter(j => j.id !== job.id)
    state.startedJobs.push(job)
  }
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
  createJob({ commit, dispatch }, file){
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
    fetch('/schema-analysis-jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/vnd.api+json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
          commit('ADD_NEW_JOB', response)
          dispatch('startJob', response.data)
        })
        .catch(error => console.log(error))
  },
  startJob({ commit }, job){
    fetch('/schema-analysis-jobs/' + job.id + '/run')
        .then(response => response.json())
        .then(() => {
          commit('START_JOB', job)
          router.push({ name: 'job', params: {id: job.id} })
        })
        .catch(error => console.log(error))
  }
}

export const getters = {
  getJobById: state => id => {
    return state.jobs.find(job => job.id === id)
  }
}
