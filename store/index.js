export const state = () => ({
  acfData: {}
})

export const mutations = {
  setAcfData (state, info) {
    state.acfData = info
  }
}

export const actions = {
  async setAcfData ({ commit }, slug) {
    const res = await this.$axios.$get(`https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=${slug}`)
    console.log(res)
    const info = res[0].acf
    commit('setAcfData', info)
  }
}
