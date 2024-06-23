<script setup lang="ts">
defineProps<{
  id: string
  label: string
  modelValue: string | number
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void
}>()

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit("update:modelValue", input.value)
}
</script>

<template>
  <div class="c-field">
    <div class="ui-control">
      <input
        :id="id"
        type="text"
        :value="modelValue"
        @input="onInput"
        v-bind="$attrs"
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
