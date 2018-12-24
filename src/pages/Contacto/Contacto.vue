<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <div>

      </div>
      <div class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right">
        <v-btn fab dark color="blue" :to="'/contacto/formcontacto'">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
 return{

}
}
}
</script>

<style lang="css">
</style>
