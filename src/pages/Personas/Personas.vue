<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <div>
      <v-data-table
          :headers="headers"
          :items="desserts"
          hide-actions
          item-key="name"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td><v-avatar outline fab>
            <v-icon size=42>account_circle</v-icon>
          </v-avatar></td>
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.cotacto }}</td>
              <td>{{ props.item.entidad }}</td>
              <td >          <v-btn to="/personas/historialevaluaciones" outline small fab color="black">
            <v-icon size=25>playlist_add_check</v-icon>
          </v-btn></td>

            </tr>
          </template>
        </v-data-table>

      </div>
      <div class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right">
        <v-btn fab dark color="blue" :to="'/personas/formusuario'">
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
  headers: [
          { text: '', sortable: false, value: 'img' },
          {
            text: 'Datos Generales',
            align: 'left',
            value: 'name'
          },
          { text: 'Correo o Teléfono', value: 'contacto' },
          { text: 'Entidad', value: 'entidad' },
          { text: 'Evaluaciones' , sortable: false, value: 'iron' },
        ],
        desserts: [
          {
            img: 'logo',
            value: false,
            name: 'Juárez Cortés Luis Felipe',
            cotacto: 'aistematico29@gmail.com 5585503033',
            entidad: 'Recurso Confiable',
            iron: 'lapiz verde',
          },
                 {
            img: 'logo',
            value: false,
            name: 'Angel Rodríguez Valladarest',
            cotacto: 'bistematico29@gmail.com 5585503033',
            entidad: 'Recurso Confiable',
            iron: 'lapiz verde',
          },
                 {
            img: 'logo',
            value: false,
            name: 'Javier Rodríguez Valladarest',
            cotacto: 'distematico29@gmail.com 5585503033',
            entidad: 'Recurso Confiable',
            iron: 'lapiz verde',
          },
          {
     img: 'logo',
     value: false,
     name: 'Javier Rodríguez Valladarest',
     cotacto: 'eistematico29@gmail.com 5585503033',
     entidad: 'Recurso Confiable',
     iron: 'lapiz verde',
   },

        ]
}
}
}
</script>

<style lang="css">
</style>
