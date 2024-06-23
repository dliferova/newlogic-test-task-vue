<script setup lang="ts">
import Label from "./winduum/ui/label/Label.vue"

defineProps<{
  id: string
  label: string
  vModel: string
}>()
</script>

<template>
  <div class="c-field">
    <div class="ui-control">
      <input
        :id="id"
        type="text"
        :v-model="vModel"
        placeholder=" "
        required
      />
      <label
        class="ui-label"
        :for="id"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.ui-control {
  background-color: #f3f4f6;
  border: none;
}

.ui-control label {
  transform: none;
}

.ui-control input:focus + label,
.ui-control input:not(:placeholder-shown) + label {
  transform: translateY(-45%);
}
</style>
