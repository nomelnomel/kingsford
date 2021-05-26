<template>
  <section class="menu-header">
    <div
      v-for="(item,i) in menu"
      :key="item.id"
      class="menu-item"
      :class="{'menu-active': highlightMenu(item.id)}"
      @click="showCurrentMenu(i)"
    >
      {{ item.title }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuHeader',
  props: {
    menu: {
      type: Array
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

    &:before {
      content: '';
      border-top: 3px solid $secondary;
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 3;
      top: -30px;
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
    }
  }
}
</style>
