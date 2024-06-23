<script setup lang="ts">
import { Table } from "../components/winduum/table"
import invoicesData, { InvoiceDataType } from "../mock/InvoicesData.ts"
import DownloadButton from "../components/DownloadButton.vue"

const invoice: InvoiceDataType = invoicesData[0]
</script>

<template>
  <Table>
    <table class="table-auto text-lighter-text-color">
      <thead
        class="whitespace-nowrap text-main-secondary font-bold border-b-[1px] border-[#DFE2E2]"
      >
        <tr class="p-4">
          <th>Číslo faktury</th>
          <th>Číslo objednávky</th>
          <th class="text-center">Cena celkem</th>
          <th class="text-end">Stažení</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="index in 9"
          :key="`${invoice.id} - ${index}`"
          class="border-0"
        >
          <td>{{ invoice.number }}</td>
          <td>{{ invoice.orderNumber }}</td>
          <td class="text-center">-{{ invoice.price }}</td>
          <td class="text-end"><DownloadButton /></td>
        </tr>
      </tbody>
    </table>
  </Table>
</template>

<style scoped></style>
