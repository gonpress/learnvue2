import VueRouter from 'vue-router'
import FbiComponent from '@/components/Fbi'

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/fbitest/",
      name: "Fbi",
      component: FbiComponent,
    },
  ]
})

  
export default router