<template>
  <section class="order">
    <OrderHeader />
    <OrderBody />
  </section>
</template>

<script>
import OrderHeader from '../components/OrderPage/OrderHeader'
import OrderBody from '../components/OrderPage/OrderBody'
export default {
  name: 'Ordering',
  components: {
    OrderHeader,
    OrderBody
  }
}
</script>

<style scoped lang="scss">

</style>
