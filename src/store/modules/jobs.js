export const state = {
  jobs: [],
  newJobs: []
}

export const mutations = {
  ADD_JOB(state, job){
    state.jobs.push(job)
  },
  ADD_NEW_JOB(state, job){
    state.newJobs.push(job)
  },
  START_JOB(state, job){
    state.jobs.push(job)
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
  createJob({ commit }, file){
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
        .then(response => commit(response))
        .catch(error => console.log(error))
  },
  startJob({ commit }, job){
    console.log('start job: ' + job.id)
    commit("START_JOB", job)
  }
}

export const getters = {
  getJobById: state => id => {
    return state.jobs.find(job => job.id === id)
  }
}
