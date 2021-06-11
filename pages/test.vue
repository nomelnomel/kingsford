<template>
  <div v-if="data" style="background: white">
    {{ data[0].acf.pictures }}
    <br>
    <br>
    <br>
    <div v-for="picture in data[0].acf.pictures" :key="picture.name">
      <img :src="`${ picture.image.sizes.medium }`" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      items: ['Hello', 'World', 'OMG'],
      current: 0,
      direction: '',
      indicator_width: 0,
      indicator_pos: 0,
      windowWidth: 0,
      num: 0,
      info: null,
      menu: null,
      about: null,
      data: null
    }
  },
  async fetch () {
    this.data = await this.$axios.$get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=home')
  }

}

</script>

<style scoped lang="scss">
.test {
  border-top: 1px solid;
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: white;
}

.menu-active{
  color: white;
}
.tab-indicator {
  position: absolute;
  top: 50px;
  left: 0;
  background-color: red;
  width: 200px;
  height: 80px;
  transition: all .7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(-100%);
  z-index: 0;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  &-item {
    width: 25%;
    margin-right: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    z-index: 1;
    position: relative;
  }
}
$percentage: 40%;

// Forwards transition
.to-right-enter {
  opacity: 0;
  transform: translateX($percentage);
}

.to-right-enter-active {
  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.to-right-leave-active {
  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateX(-$percentage);
}

// Backwards transition

.to-left-back-enter {
  opacity: 0;
  transform: translateX(-$percentage);
}

.to-left-enter-active {
  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.to-left-leave-active {
  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateX($percentage);
}

//.cont{
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  position: relative;
//}
//
//.elem{
//  width: 250px;
//  height: 250px;
//  background: #7f828b;
//  z-index: 3;
//  position: relative;
//}
//
//.elem2{
//  width: 250px;
//  height: 250px;
//  background: #ff0000a5;
//  position: absolute;
//  top: 25px;
//  left: 25px;
//  transform: translate(-25px, -25px);
//  z-index: 0;
//}

</style>
