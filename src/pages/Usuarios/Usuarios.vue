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
            <v-icon size=42>account_circle</v-icon>
          </v-avatar></td>
              <td>{{ props.item.name }}</td>
              <td >{{ props.item.correo }}</td>
              <td>{{ props.item.empresa }}</td>
              <td>{{ props.item.tipo }}</td>
          </v-btn></td>

            </tr>

          </template>
        </v-data-table>

      </div>
      <div class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right">
        <v-btn fab dark color="blue" :to="'/usuarios/formusuarios'">
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
          { text: 'DATOS GENERALES', align: 'left', value: 'name'},
          { text: 'CORREO ELECTRONICO', value: 'contacto' },
          { text: 'EMPRESA', value: 'empresa' },
          { text: 'TIPO' , value: 'tipo' },
        ],
        desserts: [
          {
            img: 'logo',
            value: false,
            name: 'Juárez Cortés Luis Felipe',
            correo: 'aistematico29@gmail.com',
            telefono: '5585503033',
            empresa: 'Becurso Confiable',
            tipo: 'Coordinador',
          },
                 {
            img: 'logo',
            value: false,
            name: 'Angel Rodríguez Valladarest',
            correo: 'bistematico29@gmail.com',
            telefono: '5585503033',
            empresa: 'Aecurso Confiable',
            tipo: 'Principal',
          },
                 {
            img: 'logo',
            value: false,
            name: 'Javier Rodríguez Valladarest',
            correo: 'distematico29@gmail.com',
            telefono: '5585503033',
            empresa: 'Cecurso Confiable',
            tipo: 'Coordinador',
          },
          {
     img: 'logo',
     value: false,
     name: 'Javier Rodríguez Valladarest',
     correo: 'eistematico29@gmail.com',
     telefono: '5585503033',
     empresa: 'Recurso Confiable',
     tipo: 'Coordinador',
   },

        ]
}
}
}
</script>

<style lang="css">
</style>
