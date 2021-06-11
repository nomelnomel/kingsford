<template>
  <section class="locations">
    <LocationsH2 />
    <LocationList :locations="locationsData.acf.locations" />
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
  head () {
    return {
      title: this.locationsData.title.rendered,
      meta: this.locationsData.yoast_meta
    }
  },
  computed: {
    ...mapState(['locationsData'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

.locations{
  background: url('~/assets/images/menu-back.png') 100% 100% no-repeat;
  background-position: top;
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
