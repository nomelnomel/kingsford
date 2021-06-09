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
@import "@/assets/base/mixins";

h2{
  @include custom-text-size(300px, 100px, 300px, 100px);
  letter-spacing: 0;
  font-family: fenway-park-jf, sans-serif;
  color: $contrast;
  text-align: center;
  font-weight: normal;
  padding-top: 1.5vh;

  @include media('<ipad-pro'){
    margin-bottom: 50px;
  }

}

</style>
