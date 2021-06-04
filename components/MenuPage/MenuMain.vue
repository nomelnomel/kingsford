<template>
  <section class="menu">
    <ul class="menu-header">
      <li
        v-for="(item,i) in menu"
        :key="item.id"
        class="menu-item"
        :class="{'menu-active': isActive(i)}"
        @click="emitWidth($event); showCurrentMenu(i)"
      >
        <span>{{ item.menu_title }}</span>
      </li>
      <transition :name="direction">
        <span class="tab-indicator" :style="getStyle" />
      </transition>
    </ul>
    <MenuSection
      v-for="section in currentMenuPage.menu_subcategories"
      :key="section.id"
      :section="section"
    />
  </section>
</template>

<script>
// import MenuSection from './MenuSection'

export default {
  name: 'MenuMain',
  components: {
    // MenuSection
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
      current: 0,
      direction: '',
      indicatorWidth: 0,
      indicatorPosition: 0,
      windowWidth: 0
    }
  },
  computed: {
    menuItemPadding () {
      return this.windowWidth >= 1024 ? 40 : this.windowWidth < 480 ? 5 : 20
    },
    currentMenuPage () {
      return this.menu[this.current]
    },
    getStyle () {
      return {
        left: this.indicatorPosition + 'px',
        width: this.indicatorWidth + 'px'
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()

    const first = document.querySelector('.menu-active')
    this.recalculate(first, this.menuItemPadding)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    showCurrentMenu (i) {
      this.current > i ? this.direction = 'to left' : this.direction = 'to right'
      this.current = i
    },
    emitWidth (e) {
      this.recalculate(e.currentTarget, this.menuItemPadding)
    },
    isActive (i) {
      return i === this.current
    },
    onResize () {
      this.windowWidth = window.innerWidth
      const currentItem = document.querySelector('.menu-active')
      this.recalculate(currentItem, this.menuItemPadding)
    },
    recalculate (node, padding) {
      const childNode = node.firstChild

      this.indicatorWidth = childNode.offsetWidth + padding * 2
      this.indicatorPosition = node.offsetLeft + (node.offsetWidth - childNode.offsetWidth) / 2 - padding
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/base/breakpoints";

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
    @include media('<mobile') {
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
      @include media('<ipad-pro') {
        top: -20px;
      }
      @include media('<mobile') {
        top: -5px;
      }
    }
  }

  &-item {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.484615px;
    position: relative;
    z-index: 2;
    cursor: pointer;
    text-transform: uppercase;
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      padding: 10px;
    }
    @include media('<ipad-pro') {
      font-size: 16px;
      line-height: 18px;
    }
    @include media('<mobile') {
      //min-width: 50%;
      font-size: 14px;
      line-height: 16px;
    }
    @include media('<mobile') {
      font-size: 12px;
    }
  }

  &-active {
    color: $primary;
  }
}

.tab-indicator {
  position: absolute;
  top: 50px;
  left: 0;
  background-color: $contrast;
  width: 200px;
  height: 100px;
  transition: all .7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(-100%);
  z-index: 0;
  @include media('<mobile') {
    height: 70px;
  }
}

$percentage: 40%;

// Forwards transition
//.to-right-enter {
//  opacity: 0;
//  transform: translateX($percentage);
//}
//
//.to-right-enter-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//}
//
//.to-right-leave-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//  opacity: 0;
//  transform: translateX(-$percentage);
//}
//
//// Backwards transition
//
//.to-left-back-enter {
//  opacity: 0;
//  transform: translateX(-$percentage);
//}
//
//.to-left-enter-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//}
//
//.to-left-leave-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//  opacity: 0;
//  transform: translateX($percentage);
//}
</style>
