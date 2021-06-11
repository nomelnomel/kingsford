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
  cateringData: {},
  loading: false
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
  },
  setLoading (state, payload) {
    state.loading = payload
    console.log(state.loading)
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
      console.log(e)
    }
  },
  async getHome ({ commit }) {
    const resHome = await this.$axios.$get(home)
    const acfHome = resHome[0].acf
    commit('setAcfHome', acfHome)
  },

  async getMenu ({ commit }) {
    const resMenu = await this.$axios.$get(menu)
    const acfMenu = resMenu[0].acf
    commit('setAcfMenu', acfMenu)
  },

  async getNavLinks ({ commit }) {
    const resFooter = await this.$axios.$get(footer)
    const acfFooter = resFooter[0].acf.links
    const links = acfFooter.map(({ slug }) => slug)
    commit('setNavLinks', links)
  },

  async getLocations ({ commit }) {
    const resLocations = await this.$axios.$get(locations)
    const acfLocations = resLocations[0].acf
    commit('setAcfLocations', acfLocations)
  },

  async getCatering ({ commit }) {
    const resCatering = await this.$axios.$get(catering)
    const acfCatering = resCatering[0].acf
    commit('setAcfCatering', acfCatering)
  }
}
