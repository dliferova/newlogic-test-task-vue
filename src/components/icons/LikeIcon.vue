<script setup lang="ts">
defineProps<{
  theme: "light" | "dark"
}>()
</script>

<template>
  <svg
    :class="{ light: theme === 'light', dark: theme === 'dark' }"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 4.5C13 2.84315 11.6009 1.5 9.875 1.5C8.58459 1.5 7.47685 2.25085 7 3.32228C6.52315 2.25085 5.41541 1.5 4.125 1.5C2.39911 1.5 1 2.84315 1 4.5C1 9.31371 7 12.5 7 12.5C7 12.5 13 9.31371 13 4.5Z"
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
