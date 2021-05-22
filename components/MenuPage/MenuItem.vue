<template>
  <div class="dish">
    <div class="dish-name">
      {{ item.title }}
    </div>
    <div class="dish-desc">
      {{ item.desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  .dish{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-name{
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 4.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    &-desc{
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
</style>
