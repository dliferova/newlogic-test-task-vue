<script setup lang="ts">
import { Card } from "../components/winduum/card"
import { UiBtn } from "../components/winduum/ui/btn"
import InputItem from "../components/InputItem.vue"

import { ref } from "vue"

const formData = ref({
  name: "",
  surname: "",
  email: "",
  phone: ""
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const submitFormImitation = () => {
  loading.value = true
  success.value = false
  error.value = false

  setTimeout(() => {
    loading.value = false

    if (Math.random() > 0.5) {
      success.value = true
    } else {
      error.value = true
    }
  }, 2000)
}
</script>

<template>
  <Card>
    <div class="pr-3 pt-3 pb-4 pl-3 flex flex-col">
      <div>
        <form @submit.prevent="submitFormImitation">
          <p class="text-xl font-semibold mb-8">Kontaktní údaje</p>
          <div class="grid md:grid-cols-2 gap-3 mb-8">
            <InputItem
              label="Jméno"
              id="user-name"
              v-model="formData.name"
            />
            <InputItem
              label="Přijmení"
              id="user-surname"
              v-model="formData.surname"
            />
            <InputItem
              label="Email"
              id="user-email"
              v-model="formData.email"
            />
            <InputItem
              label="Telefon"
              id="user-phone"
              v-model="formData.phone"
            />
          </div>

          <p class="mb-8 text-xl font-semibold">Fakturační údaje</p>
          <div class="grid md:grid-cols-2 gap-3 mb-8">
            <InputItem
              label="Název firmy"
              id="company"
            />
            <InputItem
              label="Ulice"
              id="street"
            />
            <InputItem
              label="Město"
              id="city"
            />
            <InputItem
              label="PSČ"
              id="postal-code"
            />
            <InputItem
              label="IČ"
              id="ič"
            />
            <InputItem
              label="DIČ"
              id="dič"
            />
            <InputItem
              label="Jméno"
              id="user-name"
            />
            <InputItem
              label="Přijmení"
              id="user-surname"
            />
            <InputItem
              label="Telefon"
              id="user-phone"
            />
            <InputItem
              label="Email"
              id="user-email"
            />
          </div>
          <UiBtn type="submit"> Uložit změny</UiBtn>
        </form>
        <div
          v-if="loading"
          class="ui-badge muted accent-info"
        >
          Sending data...
        </div>
        <div
          v-if="success"
          class="ui-badge muted accent-success"
        >
          Form submitted successfully!
        </div>
        <div
          v-if="error"
          class="ui-badge muted accent-error"
        >
          There was an error submitting the form. Please try again
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
