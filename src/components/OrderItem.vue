<script setup lang="ts">
import { Card } from "./winduum/card"
import { UiBtn } from "./winduum/ui/btn"
import ArrowIcon from "./icons/ArrowUturnIcon.vue"
import { orderDataType } from "../mock/OrdersData.ts"
defineProps<{
  order: orderDataType
}>()
</script>

<template>
  <Card class="mb-8 text-base">
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
          Datum objednávky: <span class="text-lighter-text-color">{{ order.date }}</span>
        </p>
        <p>
          Cena celkem: <span class="text-lighter-text-color">{{ order.price }}</span>
        </p>
      </div>
      <div class="flex flex-col md:items-end">
        <p class="text-blue">Potřebujete poradit?</p>
        <p>314 004 540 (po-pá 8:00-16:00)</p>
      </div>
    </div>
    <div class="flex flex-row">
      <UiBtn class="min-w-24 min-h-11">
        <span class="text-base font-semibold">Detail</span>
      </UiBtn>
      <UiBtn class="ghosted accent-light text-dark min-w-24 min-h-11">
        <span class="text-sm">Zopakovat</span>
        <ArrowIcon />
      </UiBtn>
    </div>
  </Card>
</template>

<style scoped></style>
