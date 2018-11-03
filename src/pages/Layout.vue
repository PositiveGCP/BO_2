<template lang="html">
  <!-- Cuando usamos un template solo podemos poner un div -->
  <div id="app">
  <v-app>
    <v-navigation-drawer app> <navbar>
    </navbar></v-navigation-drawer>
    <v-toolbar app><tbar></tbar></v-toolbar>
    <v-content>
      <v-container fluid>
        <breadcrumb>
        </breadcrumb>
        <transition name="fade">
            <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import BarraLateral from "@/components/BarraLateral.vue"
import ToolBar from "@/components/ToolBar.vue"
export default {
  components: {
    breadcrumb: Breadcrumb,
    navbar: BarraLateral,
    tbar: ToolBar
  }
}
</script>

<style lang="css">
/* Transition between pages */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
