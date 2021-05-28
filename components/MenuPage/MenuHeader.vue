<template>
  <section>
    <ul class="menu-header">
      <li
        v-for="(item,i) in menu"
        :key="item.id"
        class="menu-item"
        :class="{'menu-active': highlightMenu(item.id)}"
        @click="showCurrentMenu(i)"
      >
        {{ item.title }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MenuHeader',
  props: {
    menu: {
      type: Array,
      default: () => {},
      required: true
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    showCurrentMenu (i) {
      this.current = i
      this.$emit('changeCurrent', this.current)
    },
    highlightMenu (id) {
      return this.current === id - 1
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  &-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
    padding: 0 10%;
    margin-bottom: 100px;
    position: relative;
    list-style: none;
    @media screen and (max-width: $bpM){
      padding: 50px 0 0;
      overflow-x: scroll;
    }

    &:before {
      content: '';
      border-top: 3px solid $secondary;
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 3;
      top: -30px;
      @media screen and (max-width: $bpM){
        top: 10px;
      }
    }
  }

  &-item {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.484615px;
    position: relative;
    z-index: 2;
    padding: 10px;
    cursor: pointer;
    text-transform: uppercase;
    @media screen and (max-width: $bpT){
      font-size: 16px;
      line-height: 18px;
    }
    @media screen and (max-width: $bpM){
      min-width: 50%;
    }
  }

  &-active {
    color: $primary;

    &:before {
      content: '';
      height: 122px;
      width: 279px;
      background: $contrast;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: $bpT){
        height: 100px;
        width: 180px;
      }
    }
  }
}
</style>
