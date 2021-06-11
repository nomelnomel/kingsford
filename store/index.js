const footer = 'https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=footer'
const home = 'https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=home'
const menu = 'https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=menu'
const locations = 'https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=locations'
const catering = 'https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=catering'

export const state = () => ({
  navLinks: [],
  menuData: {},
  homeData: {},
  locationsData: {},
  cateringData: {}
})

export const mutations = {
  setAcfData (state, info) {
    state.acfData = info
  },
  setNavLinks (state, links) {
    state.navLinks = links
  },
  setAcfMenu (state, payload) {
    state.menuData = payload
  },
  setAcfHome (state, payload) {
    state.homeData = payload
  },
  setAcfLocations (state, payload) {
    state.locationsData = payload
  },
  setAcfCatering (state, payload) {
    state.cateringData = payload
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    try {
      await Promise.all(
        [
          dispatch('getHome'),
          dispatch('getMenu'),
          dispatch('getNavLinks'),
          dispatch('getLocations'),
          dispatch('getCatering')
        ]
      )
    } catch (e) {
      // eslint-disable-next-line
      console.log(e)
    }
  },
  async getHome ({ commit }) {
    const resHome = (await this.$axios.$get(home))[0]
    // const acfHome = resHome[0].acf
    commit('setAcfHome', resHome)
  },

  async getMenu ({ commit }) {
    const resMenu = (await this.$axios.$get(menu))[0]
    // const acfMenu = resMenu[0].acf
    commit('setAcfMenu', resMenu)
  },

  async getNavLinks ({ commit }) {
    const resFooter = await this.$axios.$get(footer)
    const acfFooter = resFooter[0].acf.links
    const links = acfFooter.map(({ slug }) => slug)
    commit('setNavLinks', links)
  },

  async getLocations ({ commit }) {
    const resLocations = (await this.$axios.$get(locations))[0]
    // const acfLocations = resLocations[0].acf
    commit('setAcfLocations', resLocations)
  },

  async getCatering ({ commit }) {
    const resCatering = (await this.$axios.$get(catering))[0]
    // const acfCatering = resCatering[0].acf
    commit('setAcfCatering', resCatering)
  }
}
