<script setup lang="ts">
import OrderItem from "../components/OrderItem.vue"
import orderData, { OrderDataType } from "../mock/OrdersData.ts"

const order: OrderDataType = orderData[0]
</script>

<template>
  <ul>
    <li
      class="mb-8 last-of-type:mb-0"
      v-for="index in 3"
      :key="`${order.id} - ${index}`"
    >
      <OrderItem :order="order" />
    </li>
  </ul>
</template>

<style scoped></style>
