export default [
  {
    id: "mock-order",
    orderNumber: "2200245834",
    isPaid: true,
    date: "6. 12. 2022",
    price: "1 500 Kč"
  }
]

export interface orderDataType {
  id: string
  orderNumber: string
  isPaid: boolean
  date: string
  price: string
}
