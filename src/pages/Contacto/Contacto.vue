<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <div>
        <h1>Guia de Uso</h1>
        <br>
        <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Paso 1</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">Paso 2</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Paso 3</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card
                    class="mb-5"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 2"
                  >
                    Continuar
                  </v-btn>

                  <v-btn flat>Cancelar</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card
                    class="mb-5"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 3"
                  >
                    Continuar
                  </v-btn>

                  <v-btn flat>Cancelar</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card
                    class="mb-5"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 1"
                  >
                    Continuar
                  </v-btn>

                  <v-btn flat>Cancelar</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
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
      e1: 0
}
}
}
</script>

<style lang="css">
</style>
