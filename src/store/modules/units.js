export const state = {
  units: []
}

export const mutations = {
  ADD_UNIT(state, unit) {
    this.units.push(unit)
  }
}

export const actions = {
  fetch_units({ commit }) {
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
