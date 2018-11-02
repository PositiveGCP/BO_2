import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Layout from '@/pages/Layout.vue'
import Index from '@/pages/Index.vue'
import Personas from '@/pages/Personas/Personas.vue'
import Cuentas from '@/pages/Cuentas/Cuentas.vue'
import Usuarios from '@/pages/Usuarios/Usuarios.vue'
import Solicitudes from '@/pages/Solicitudes/Solicitudes.vue'
import Resultados from '@/pages/Resultados/Resultados.vue'
import Facturacion from '@/pages/Facturacion/Facturacion.vue'
import Casos from '@/pages/Casos/Casos.vue'
import Contacto from '@/pages/Contacto/Contacto.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

//Definimos las rutas
const routes =
[
  {path: '/', component:Index},
  {path: '/personas', component:Personas},
  {path: '/cuentas', component:Cuentas},
  {path: '/usuarios', component:Usuarios},
  {path: '/solicitudes', component:Solicitudes},
  {path: '/resultados', component:Resultados},
  {path: '/facturacion', component:Facturacion},
  {path: '/casos', component:Casos},
  {path: '/contacto', component:Contacto},

]

//Mode: history guarda en el navegador la ruta para regresarse
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(Layout)
}).$mount('#app')
