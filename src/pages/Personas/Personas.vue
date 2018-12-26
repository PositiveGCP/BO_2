<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <div>
      <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="name"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td><v-avatar outline fab>
                <img
                  src="@/assets/masculino.png"
                  alt="img_user"
                >          </v-avatar></td>
              <td>{{ props.item.name }}</td>
              <td >{{ props.item.correo }} <br> {{ props.item.telefono }}</td>
              <td>{{ props.item.entidad }}</td>
              <td> <v-btn to="/personas/historialevaluaciones" slot="activator"
              color="indigo"
              dark>
            <v-icon size=25>playlist_add_check</v-icon>
          </v-btn></td>

            </tr>
          </template>
        </v-data-table>

      </div>
      <div class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right">
        <v-btn fab dark color="blue" :to="'/personas/formpersonas'">
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
          { text: 'Correo / Teléfono', value: 'contacto' },
          { text: 'Entidad', value: 'entidad' },
          { text: 'Evaluaciones' , sortable: false, value: 'iron' },
        ],
        desserts: [
          {
            img: 'logo',
            value: false,
            name: 'Juárez Cortés Luis Felipe',
            correo: 'aistematico29@gmail.com',
            telefono: '5585503033',
            entidad: 'Becurso Confiable',
            iron: 'lapiz verde',
          },
                 {
            img: 'logo',
            value: false,
            name: 'Angel Rodríguez Valladarest',
            correo: 'bistematico29@gmail.com',
            telefono: '5585503033',
            entidad: 'Aecurso Confiable',
            iron: 'lapiz verde',
          },
                 {
            img: 'logo',
            value: false,
            name: 'Javier Rodríguez Valladarest',
            correo: 'distematico29@gmail.com',
            telefono: '5585503033',
            entidad: 'Cecurso Confiable',
            iron: 'lapiz verde',
          },
          {
     img: 'logo',
     value: false,
     name: 'Javier Rodríguez Valladarest',
     correo: 'eistematico29@gmail.com',
     telefono: '5585503033',
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
