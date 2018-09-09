import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Layout from '@/pages/Layout.vue'
import Index from '@/pages/Index.vue'
import Resultados from '@/pages/Resultados/Resultados.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

//Definimos las rutas
const routes =
[
  {path: '/', component:Index},
  {path: '/resultados', component:Resultados}
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
