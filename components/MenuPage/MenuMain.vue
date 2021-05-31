<template>
  <section class="menu">
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
    <MenuSection
      v-for="section in currentMenuPage.sections"
      :key="section.id"
      :section="section"
    />
  </section>
</template>

<script>
import MenuSection from './MenuSection'

export default {
  name: 'MenuMain',
  components: {
    MenuSection
  },
  props: {
    menu: {
      type: Array,
      default: () => {
      },
      required: true
    }
  },
  data () {
    return {
      current: 0
    }
  },
  computed: {
    currentMenuPage () {
      return this.menu[this.current]
    }
  },
  methods: {
    showCurrentMenu (i) {
      this.currentMenuPage = this.menu[i]
      this.current = i
    },
    highlightMenu (id) {
      return this.current === id - 1
    }
  }
}
</script>

<style lang="scss">
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
    @media screen and (max-width: $bpM) {
      //  padding: 50px 0 0;
      //  overflow-x: scroll;
      //  overflow-y: hidden;
      padding: 0;
    }

    &:before {
      content: '';
      border-top: 3px solid $secondary;
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 3;
      top: -30px;
      @media screen and (max-width: $bpT) {
        top: -20px;
      }
      @media screen and (max-width: $bpM) {
        top: -10px;
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
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: $bpT) {
      font-size: 16px;
      line-height: 18px;
    }
    @media screen and (max-width: $bpM) {
      //min-width: 50%;
      font-size: 14px;
      line-height: 16px;
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
      @media screen and (max-width: $bpT) {
        top: 10px;
        height: 100px;
        width: 180px;
      }
      @media screen and (max-width: $bpM) {
        top: 20px;
        width: 110px;
        height: 95px;
      }
    }
  }
}
</style>
