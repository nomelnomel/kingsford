<template>
  <section class="locations">
    <LocationsH2 />
    <LocationList :locations="acfData.locations" />
  </section>
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
      acf: null
    }
  },
  computed: {
    ...mapState(['acfData'])
  },
  mounted () {
    this.$store.dispatch('setAcfData', `${this.$route.name}`)
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
