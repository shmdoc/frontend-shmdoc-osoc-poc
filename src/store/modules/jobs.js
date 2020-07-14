export const state = {
  finishedJobs: [],
  newJobs: []
}

export const mutations = {
  ADD_JOB(state, job){
    state.newJobs.push(job)
  },
  START_JOB(state, job){
    state.jobs.push(job)
  }
}

export const actions = {
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
