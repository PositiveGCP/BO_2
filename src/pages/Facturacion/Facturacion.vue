<template lang="html">
  <div>
  <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
    >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.mes }}</td>
          <td>{{ props.item.ano }}</td>
          <td>
            <v-layout row wrap align-center>
              <v-flex class="text-xs-center">
                <v-btn
                class="white--text"
                color="green darken-1"
                primary>
                <v-icon size=25>attach_money</v-icon>
              </v-btn>
              </v-flex>
          </v-layout>
    </td>

        </tr>

      </template>
    </v-data-table>

  </div>
</template>

<script>
export default {
  data () {
 return{
   dialog: false,
  headers: [
          { text: 'MES', align: 'left', value: 'mes'},
          { text: 'AÑO', value: 'ano' },
          { text: '' , align: 'center' ,sortable: false, value: 'reporte' }
        ],
        desserts: [
          {
            img: 'logo',
            value: false,
            mes: 'Febrero',
            ano: '2019',
            reporte:'reporte'
          },
          {
            img: 'logo',
            value: false,
            mes: 'Marzo',
            ano: '2019',
            reporte:'reporte'
          },
          {
            img: 'logo',
            value: false,
            mes: 'Abril',
            ano: '2019',
            reporte:'reporte'
          },
          {
            img: 'logo',
            value: false,
            mes: 'Enero',
            ano: '2019',
            reporte:'reporte'
          },
          {
            img: 'logo',
            value: false,
            mes: 'Mayo',
            ano: '2019',
            reporte:'reporte'
          },
          {
            img: 'logo',
            value: false,
            mes: 'Junio',
            ano: '2019',
            reporte:'reporte'
          },
          {
            img: 'logo',
            value: false,
            mes: 'Julio',
            ano: '2019',
            reporte:'reporte'
          },

        ]
}
},
}
</script>

<style lang="css">
</style>
