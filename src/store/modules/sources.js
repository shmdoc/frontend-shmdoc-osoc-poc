import Vue from 'vue'

export const state = {
  sources: ["zeehondjes", "water", "zandkorrels", "duingras"],
}

export const mutations = {
  ADD_SOURCE(state, source) {
    state.push(source)
  }
}

export const actions = {
  addSource({ commit }, source) {
    commit('ADD_SOURCE', source)
  }
}

export const getters = {
}
