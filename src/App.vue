<script setup lang="ts">
import NotFoundPage from "./views/NotFoundPage.vue"
import { computed, ref } from "vue"
import routes from "./mock/Routes.ts"
import Text from "./components/winduum/ui/text/Text.vue"
import MenuElement from "./components/MenuElement.vue"

const currentPath = ref(window.location.hash)

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash
})

const currentRoute = computed(() => {
  return routes.find((item) => item.url === currentPath.value.slice(1))
})
</script>

<template>
  <div class="flex flex-col lg:h-screen bg-body-bg">
    <div class="container mx-auto px-4 lg:px-8 xl:px-12">
      <div class="text-center py-4 md:text-start xl:py-8">
        <Text>
          <h1>{{ currentRoute?.name || "Page not found" }}</h1>
        </Text>
      </div>
      <div class="flex flex-col lg:flex-row gap-x-8">
        <div class="mb-6 lg:mb-0">
          <MenuElement
            :routes="routes"
            :currentRoute="currentRoute"
          />
        </div>
        <div class="pb-10 lg:pb-0 flex-1">
          <component :is="currentRoute?.component || NotFoundPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
