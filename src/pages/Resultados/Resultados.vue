<template lang="html">
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
          <td>{{ props.item.area }}</td>
          <td>{{ props.item.entidad }}</td>
          <td>{{ props.item.fecha }}</td>
          <td>{{ props.item.semaforo }}</td>
          <td >          <v-btn to="/" outline small fab color="black">
        <v-icon size=25>edit</v-icon>
      </v-btn></td>

          <td ><v-btn outline small fab color="black">
        <v-icon size=25>description</v-icon>
      </v-btn></td>

        </tr>
      </template>
    </v-data-table>

  </div>
</template>

<script>
export default {
  data () {
 return{
  headers: [
          { text: '', sortable: false, value: 'img' },
          {
            text: 'Nombre',
            align: 'left',
            value: 'name'
          },
          { text: 'Área', value: 'area' },
          { text: 'Entidad', value: 'entidad' },
          { text: 'Fecha', value: 'fecha' },
          { text: 'Semáforo', value: 'semaforo' },
          { text: '' , sortable: false, value: 'iron' },
          { text: '' , sortable: false, value: 'reporte' }

        ],
        desserts: [
          {
            img: 'logo',
            value: false,
            name: 'Daniel Rodríguez Valladarest Carrillo',
            area: 'Seguridad',
            entidad: 'CONFIANZA',
            fecha: '2018/09/08 08:04:11',
            semaforo: 'Excelente',
            iron: 'lapiz verde',
            reporte:'reporte'
          },
                 {
            img: 'logo',
            value: false,
            name: 'Angel Rodríguez Valladarest',
            area: 'Seguridad',
            entidad: 'CONFIANZA',
            fecha: '2018/09/08 08:04:11',
            semaforo: 'Excelente',
            iron: 'lapiz verde',
            reporte:'reporte'
          },
                 {
            img: 'logo',
            value: false,
            name: 'Javier Rodríguez Valladarest',
            area: 'Seguridad',
            entidad: 'CONFIANZA',
            fecha: '2018/09/08 08:04:11',
            semaforo: 'Excelente',
            iron: 'lapiz verde',
            reporte:'reporte'
          },
          {
     img: 'logo',
     value: false,
     name: 'Javier Rodríguez Valladarest',
     area: 'Seguridad',
     entidad: 'CONFIANZA',
     fecha: '2018/09/08 08:04:11',
     semaforo: 'Excelente',
     iron: 'lapiz verde',
     reporte:'reporte'
   },

        ]
}
}
}
</script>

<style lang="css">
</style>
