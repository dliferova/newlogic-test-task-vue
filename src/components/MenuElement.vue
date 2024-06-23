<script setup lang="ts">
import { Card } from "./winduum/card"
import MenuItem from "./MenuItem.vue"
import { UiBtn } from "./winduum/ui/btn"
import LogoutIcon from "./icons/LogoutIcon.vue"

defineProps<{
  routes: any[]
  currentRoute: any
}>()
</script>

<template>
  <Card>
    <div class="flex flex-col">
      <div class="text-center mb-6">
        <p class="text-xl font-semibold">Daniil Filatov</p>
        <p class="text-sm text-lighter-text-color">daniil.filatov@newlogic.cz</p>
      </div>

      <ul class="flex flex-col mb-8">
        <MenuItem
          v-for="route in routes"
          :key="route.id"
          :name="route.name"
          :link="'#' + route.url"
          :is-active="currentRoute.id === route.id"
          :svg-content="route.svgContent"
        />
      </ul>
      <UiBtn class="ghosted accent-main">
        <LogoutIcon />
        <span>Odhlásit se</span>
      </UiBtn>
    </div>
  </Card>
</template>

<style scoped></style>
