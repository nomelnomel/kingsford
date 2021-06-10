const footer = 'https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=footer'

export const state = () => ({
  acfData: {},
  navLinks: []
})

export const mutations = {
  setAcfData (state, info) {
    state.acfData = info
  },
  setNavLinks (state, links) {
    state.navLinks = links
  }
}

export const actions = {
  async setAcfData ({ commit }, slug) {
    const res = await this.$axios.$get(`https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=${slug}`)
    const info = res[0].acf
    commit('setAcfData', info)
  },
  async nuxtServerInit ({ commit }) {
    const response = await this.$axios.$get(footer)
    const acf = response[0].acf.links
    const links = acf.map(({ slug }) => slug)
    commit('setNavLinks', links)
  }
}
