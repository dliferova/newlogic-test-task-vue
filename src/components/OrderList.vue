<script setup lang="ts">
import OrderItem from "./OrderItem.vue"
import orderData from "../mock/OrdersData.ts"
</script>

<template>
  <ul>
    <OrderItem
      v-for="index in 3"
      :key="`${orderData[0].id} - ${index}`"
      :order="orderData[0]"
    />
  </ul>
</template>

<style scoped></style>
