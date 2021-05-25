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
    &:after{
      content: url('~/assets/catering3.png');
      position: absolute;
      bottom: 125px;
      right: 0;
    }
  }
</style>
