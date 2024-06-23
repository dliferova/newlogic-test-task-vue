<script setup lang="ts">
import ArrowIcon from "./icons/ArrowIcon.vue"

defineProps<{
  name: string
  link: string
  svgContent: any
  isActive: boolean
  isDisabled?: boolean
}>()
</script>

<template>
  <li
    class="min-w-48 xl:min-w-64 rounded-md text-sm font-semibold mb-2"
    :class="{
      'bg-primary-accent text-white': isActive,
      'bg-grey text-black': !isActive
    }"
  >
    <a
      class="flex flex-row items-center py-4 pl-4 pr-6"
      :class="{ 'cursor-not-allowed': isDisabled }"
      :href="link"
    >
      <div class="mr-2.5">
        <component
          :is="svgContent"
          :theme="isActive ? 'dark' : 'light'"
        />
      </div>
      <div class="flex-1">
        <span>{{ name }}</span>
      </div>
      <ArrowIcon :theme="isActive ? 'dark' : 'light'" />
    </a>
  </li>
</template>

<style scoped></style>
