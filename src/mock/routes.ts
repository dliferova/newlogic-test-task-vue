import FileIcon from "../components/icons/FileIcon.vue"
import OrdersPage from "../views/OrdersPage.vue"
import InvoiceIcon from "../components/icons/InvoiceIcon.vue"
import InvoicesPage from "../views/InvoicesPage.vue"
import LikeIcon from "../components/icons/LikeIcon.vue"
import SettingIcon from "../components/icons/SettingIcon.vue"
import SettingsPage from "../views/SettingsPage.vue"

export default [
  {
    id: 1,
    name: "Moje objednávky",
    url: "/orders",
    svgContent: FileIcon,
    component: OrdersPage
  },
  {
    id: 2,
    name: "Faktury",
    url: "/invoices",
    svgContent: InvoiceIcon,
    component: InvoicesPage
  },
  {
    id: 3,
    name: "Seznam přani",
    url: "/wishlist",
    svgContent: LikeIcon,
    component: null
  },
  {
    id: 4,
    name: "Slevové kódy",
    url: "/discount",
    svgContent: LikeIcon,
    component: null
  },
  {
    id: 5,
    name: "Věrnostní program",
    url: "/loyalty-program",
    svgContent: LikeIcon,
    component: null
  },
  {
    id: 6,
    name: "Nastavení účtu",
    url: "/settings",
    svgContent: SettingIcon,
    component: SettingsPage
  }
]
