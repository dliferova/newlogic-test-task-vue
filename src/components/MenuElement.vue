<script setup lang="ts">
import { Card } from "./winduum/card"
import MenuItem from "./MenuItem.vue"
import { UiBtn } from "./winduum/ui/btn"
import LogoutIcon from "./icons/LogoutIcon.vue"
import { RouteType } from "../mock/Routes.ts"

defineProps<{
  routes: RouteType[]
  currentRoute: RouteType
}>()
</script>

<template>
  <Card class="pt-8 px-6 pb-5">
    <div class="flex flex-col">
      <div class="text-center mb-7">
        <p class="text-xl font-semibold">Daniil Filatov</p>
        <p class="text-sm text-lighter-text-color">daniil.filatov@newlogic.cz</p>
      </div>

      <ul class="flex flex-col mb-4">
        <MenuItem
          v-for="route in routes"
          :key="route.id"
          :name="route.name"
          :link="`#${route.url}`"
          :is-active="currentRoute.id === route.id"
          :svg-content="route.svgContent"
        />
      </ul>
      <div class="place-content-start">
        <UiBtn class="ghosted accent-main">
          <LogoutIcon />
          <span>Odhlásit se</span>
        </UiBtn>
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
