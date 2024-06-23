export default [
  {
    id: "mock-invoice",
    number: "121548784515487",
    orderNumber: "121548784515487",
    price: "1 500",
    priceCurrency: "Kč",
    file: null
  }
]

export interface InvoiceDataType {
  id: string
  number: string
  orderNumber: string
  price: string
  priceCurrency: string
  file: null
}
