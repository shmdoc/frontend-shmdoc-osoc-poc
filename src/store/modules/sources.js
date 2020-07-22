export const state = {
  sources: [],
}

export const mutations = {
  ADD_SOURCE(state, newSource) {
    let found = false
    state.sources.forEach(source => {
      if (source.id === newSource.id) {
        found = true
      }
    })
    if (!found) {
      state.sources.push(newSource)
    }
  }
}

export const actions = {
  fetchSources({ commit }) {
    fetch('/sources')
        .then(response => response.json())
        .then(response => {
          response.data.forEach(source => commit('ADD_SOURCE', source))
        })
        .catch(error => console.log(error))
  },
  addSource({ commit }, source) {
    let d = new Date()
    let timestamp = d.toISOString()
    let data = {data: {
                        type: "sources",
                        relationships: {
                        },
                        attributes: {
                          name: source.name,
                          created: timestamp,
                          note: source.note
                        }
                      }
    }
    fetch('/sources', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/vnd.api+json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => commit('ADD_SOURCE', response.data))
        .catch(error => console.log(error))
  }
}

export const getters = {
}
