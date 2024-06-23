export default [
  {
    id: "mock-order",
    orderNumber: "2200245834",
    isPaid: true,
    date: new Date(2022, 11, 6),
    price: "1 500",
    priceCurrency: "Kč"
  }
]

export interface OrderDataType {
  id: string
  orderNumber: string
  isPaid: boolean
  date: Date
  price: string
  priceCurrency: string
}
