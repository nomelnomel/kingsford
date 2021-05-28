<template>
  <div class="catering">
    <CateringText />
    <CateringAddress />
  </div>
</template>

<script>
import CateringText from '../components/CateringPage/CateringText'
import CateringAddress from '../components/CateringPage/CateringAddress'
export default {
  name: 'Catering',
  components: {
    CateringText,
    CateringAddress
  }
}
</script>

<style scoped lang="scss">
  .catering{
    background: $contrast;
    display: flex;
    color: white;
    padding: 125px 250px 650px;
    position: relative;
    @media screen and (max-width: $bpT){
      padding: 125px 50px 500px;
    }
    &:after{
      content: url('~/static/images/catering3.png');
      position: absolute;
      bottom: 50px;
      right: 0;
    }
  }
</style>
