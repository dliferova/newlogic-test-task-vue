<script setup lang="ts">
defineProps<{
  theme: "light" | "dark"
}>()
</script>

<template>
  <svg
    :class="{ light: theme === 'light', dark: theme === 'dark' }"
    width="12"
    height="16"
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.75 1.5H1.75C1.33579 1.5 1 1.83579 1 2.25V13.75C1 14.1642 1.33579 14.5 1.75 14.5H10.25C10.6642 14.5 11 14.1642 11 13.75V7.75M4.75 1.5H5C8.31371 1.5 11 4.18629 11 7.5V7.75M4.75 1.5C5.99264 1.5 7 2.50736 7 3.75V4.75C7 5.16421 7.33579 5.5 7.75 5.5H8.75C9.99264 5.5 11 6.50736 11 7.75M4 10L5.5 11.5L8 8"
      stroke="#171717"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.dark path {
  stroke: white;
}
</style>
