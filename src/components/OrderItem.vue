<script setup lang="ts">
import { Card } from "./winduum/card"
import { UiBtn } from "./winduum/ui/btn"
import ArrowIcon from "./icons/ArrowUturnIcon.vue"
import { OrderDataType } from "../mock/OrdersData.ts"
defineProps<{
  order: OrderDataType
}>()

const formatDate = (date: Date): string =>
  `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`
</script>

<template>
  <Card class="px-6 py-6 text-base">
    <div class="flex flex-row flex-between mb-6">
      <p class="text-xl font-semibold">Čislo objednávky: {{ order.orderNumber }}</p>
      <p
        v-if="order.isPaid"
        class="text-xs leading-5 font-semibold text-green"
      >
        Zaplaceno
      </p>
    </div>
    <div class="flex flex-col md:flex-row flex-between mb-6">
      <div class="flex flex-col">
        <p>
          Datum objednávky:
          <span class="text-lighter-text-color">{{ formatDate(order.date) }}</span>
        </p>
        <p>
          Cena celkem:
          <span class="text-lighter-text-color">{{ order.price }} {{ order.priceCurrency }}</span>
        </p>
      </div>
      <div class="flex flex-col md:items-end">
        <a
          href="tel:314004540"
          class="text-primary-accent"
          >Potřebujete poradit?</a
        >
        <p>314 004 540 (po-pá 8:00-16:00)</p>
      </div>
    </div>
    <div class="flex flex-row gap-x-2.5 items-center">
      <UiBtn class="lg">
        <span class="font-semibold">Detail</span>
      </UiBtn>
      <UiBtn class="ghosted accent-dark">
        <span class="text-sm">Zopakovat</span>
        <ArrowIcon />
      </UiBtn>
    </div>
  </Card>
</template>

<style scoped></style>
