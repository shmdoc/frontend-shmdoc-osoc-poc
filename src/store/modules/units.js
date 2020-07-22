export const state = {
  units: []
}

export const mutations = {
  ADD_UNIT(state, unit) {
    state.units.push(unit)
  },
  CLEAR_UNITS(state) {
    state.units = []
  }
}

export const actions = {
  fetch_units({ commit }) {
    commit('CLEAR_UNITS')
    fetch('/units')
        .then(response => response.json())
        .then(response => {
          response.data.forEach(unit => commit('ADD_UNIT', unit))
        })
        .catch(error => console.log(error))
  }
}

export const getters = {
}
