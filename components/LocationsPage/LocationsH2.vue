<template>
  <h2>Locations</h2>
</template>

<script>
export default {
  name: 'LocationsH2'
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

h2{
  font-size: 300px;
  letter-spacing: 0;
  line-height: 300px;
  font-family: fenway-park-jf, sans-serif;
  color: $contrast;
  text-align: center;
  font-weight: normal;

  @include media('<ipad-pro'){
    font-size: 200px;
    line-height: 200px;
    margin-bottom: -50px;
  }

  @include media('<mobile'){
    font-size: 100px;
    line-height: 100px;
    margin-bottom: 50px;
  }

}

</style>
