<script setup lang="ts">
import { Card } from "../components/winduum/card"
import { UiBtn } from "../components/winduum/ui/btn"
import InputItem from "../components/InputItem.vue"

import { ref } from "vue"

const formData = ref({
  name: "",
  surname: "",
  email: "",
  phone: "",
  company: "",
  street: "",
  city: "",
  postalCode: "",
  ic: "",
  dic: "",
  invoiceContactName: "",
  invoiceContactSurname: "",
  invoiceContactPhone: "",
  invoiceContactEmail: ""
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

    if (Math.random() > 0.8) {
      success.value = true
      console.log("Successful form submision, data: ", formData)
    } else {
      error.value = true
    }
  }, 2000)
}
</script>

<template>
  <Card class="p-6">
    <div class="flex flex-col">
      <div>
        <form @submit.prevent="submitFormImitation">
          <p class="text-xl font-semibold mb-8">Kontaktní údaje</p>
          <div class="grid md:grid-cols-2 gap-3 mb-6">
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
          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <InputItem
              label="Název firmy"
              id="company"
              v-model="formData.company"
            />
            <InputItem
              label="Ulice"
              id="street"
              v-model="formData.street"
            />
            <InputItem
              label="Město"
              id="city"
              v-model="formData.city"
            />
            <InputItem
              label="PSČ"
              id="postal-code"
              v-model="formData.postalCode"
            />
            <InputItem
              label="IČ"
              id="ič"
              v-model="formData.ic"
            />
            <InputItem
              label="DIČ"
              id="dič"
              v-model="formData.dic"
            />
            <InputItem
              label="Jméno"
              id="user-name"
              v-model="formData.invoiceContactName"
            />
            <InputItem
              label="Přijmení"
              id="user-surname"
              v-model="formData.invoiceContactSurname"
            />
            <InputItem
              label="Telefon"
              id="user-phone"
              v-model="formData.invoiceContactPhone"
            />
            <InputItem
              label="Email"
              id="user-email"
              v-model="formData.invoiceContactEmail"
            />
          </div>
          <UiBtn
            class="lg"
            type="submit"
            :disabled="loading"
          >
            Uložit změny
          </UiBtn>
        </form>
        <div
          v-if="loading"
          class="ui-badge muted accent-info mt-4"
        >
          Sending data...
        </div>
        <div
          v-if="success"
          class="ui-badge muted accent-success mt-4"
        >
          Form submitted successfully!
        </div>
        <div
          v-if="error"
          class="ui-badge muted accent-error mt-4"
        >
          There was an error submitting the form. Please try again
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
