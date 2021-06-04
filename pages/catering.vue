<template>
  <div v-if="text" class="catering">
    <CateringText :text="text" />
    <CateringAddress v-if="info" :info="info" />
    <img src="~/assets/images/catering3.png" alt="" class="cat3">
  </div>
</template>

<script>
import axios from 'axios'
import CateringText from '../components/CateringPage/CateringText'
import CateringAddress from '../components/CateringPage/CateringAddress'
export default {
  name: 'Catering',
  components: {
    CateringText,
    CateringAddress
  },
  data () {
    return {
      text: null,
      info: null
    }
  },
  mounted () {
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=catering').then(response => (this.text = response.data[0].acf.text))
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=catering').then(response => (this.info = response.data[0].acf.item))
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
