<template>
  <div class="test">
    {{ windowWidth }}
    {{ num }}
    <br>
    <br>
    <br>
    <ul class="menu">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="menu-item"
        :class="{'menu-active':isActive(i)}"
        @click="changeCurrent(i); emitWidth($event)"
      >
        <span>{{ item }}</span>
      </li>
      <transition :name="direction">
        <span class="tab-indicator" :style="getStyle" @click.prevent="emitWidth($event)" />
      </transition>
    </ul>
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
      num: 0
    }
  },
  computed: {
    getStyle () {
      return {
        left: this.indicator_pos + 'px',
        width: this.indicator_width + 'px'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    const currentItem = document.querySelector('.menu-active')
    this.indicator_width = currentItem.firstChild.offsetWidth
    this.indicator_pos = currentItem.offsetLeft + (currentItem.offsetWidth - currentItem.firstChild.offsetWidth) / 2
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    isActive (i) {
      return i === this.current
    },
    changeCurrent (i) {
      this.current > i ? this.direction = 'to left' : this.direction = 'to right'
      this.current = i
    },
    emitWidth (e) {
      const parentWidth = e.currentTarget.offsetWidth
      const childWidth = e.currentTarget.firstChild.offsetWidth
      this.indicator_width = childWidth
      this.indicator_pos = e.currentTarget.offsetLeft + (parentWidth - childWidth) / 2
    },
    onResize () {
      this.windowWidth = window.innerWidth
      const currentItem = document.querySelector('.menu-active')
      this.indicator_width = currentItem.firstChild.offsetWidth
      this.indicator_pos = currentItem.offsetLeft + (currentItem.offsetWidth - currentItem.firstChild.offsetWidth) / 2
    }
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
