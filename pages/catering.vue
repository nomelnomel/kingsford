<template>
  <div class="catering">
    <CateringText :text="cateringData.text" />
    <CateringAddress :info="cateringData.item" />
    <img
      src="~/assets/images/catering3.jpg"
      alt=""
      class="cat3"
      data-aos="fade-up-left"
      data-aos-delay="900"
      data-aos-duration="700"
      data-aos-offset="-500"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CateringText from '../components/CateringPage/CateringText'
import CateringAddress from '../components/CateringPage/CateringAddress'
export default {
  name: 'Catering',
  components: {
    CateringText,
    CateringAddress
  },
  head () {
    return {
      meta: this.cateringData.yoast_meta
    }
  },
  computed: {
    ...mapState(['cateringData'])
  }

}
</script>

<style scoped lang="scss">

@import "@/assets/base/breakpoints";
  .catering{
    background: $contrast;
    display: flex;
    color: white;
    padding: 125px 250px 650px;
    position: relative;
    overflow: hidden;

    @include media('<ipad-pro'){
      padding: 125px 50px 500px;
    }

    @include media('<mobile'){
      flex-direction: column;
      padding: 125px 25px 60%;
    }

    .cat3{
      position: absolute;
      bottom: 50px;
      right: 0;
      width: auto;

      @include media('<mobile'){
        max-width: 100%;
      }

    }

  }

</style>
