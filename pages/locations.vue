<template>
  <section class="locations">
    <LocationsH2 />
    <LocationList :locations="locations" />
  </section>
</template>

<script>
import axios from 'axios'
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
      locations: null
    }
  },
  mounted () {
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=locations').then(response => (this.locations = response.data[0].acf.locations))
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
