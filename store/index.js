export default {
  actions: {
    async getInfo ({ commit }, slug) {
      const res = await this.$axios.$get(`https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=${slug}`)
      const info = res[0].acf
      return info
    }
  }
}
