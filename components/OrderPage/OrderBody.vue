<template>
  <section class="order">
    Online Ordering coming soon! Please contact <nuxt-link to="/locations" class="underline underline-contrast">
       locations
      </nuxt-link>directly to place an order.
  </section>
</template>

<script>
export default {
  name: 'Ordering'
}
</script>

<style scoped lang="scss">

.order{
  background: $contrast;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 3.38px;
  line-height: 45px;
  font-family: alternate-gothic-condensed-a, sans-serif;
  height: 100vh;
}

</style>
