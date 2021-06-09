<template>
  <section v-if="!loading" class="locations">
    <LocationsH2 />
    <LocationList :locations="acfData.locations" />
  </section>
  <div v-else class="loading">
    <img src="@/assets/icons/reload.svg" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LocationList from '../components/LocationsPage/LocationList'
import LocationsH2 from '../components/LocationsPage/LocationsH2'
export default {
  name: 'Locations',
  components: {
    LocationList,
    LocationsH2
  },
  data () {
    return {
      loading: false
    }
  },
  async fetch () {
    try {
      this.loading = true
      await this.$store.dispatch('setAcfData', `${this.$route.name}`)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      this.loading = false
    }
  },
  computed: {
    ...mapState(['acfData'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

.locations{
  background: url('~/assets/images/menu-back.png') 100% 100% no-repeat;
  background-size: cover;
  background-color: $primary;

  @include media('<ipad-pro'){
    padding-top: 100px;
  }

  @include media('<mobile'){
    padding-top: 60px;
  }

}

</style>
