<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <div>
      <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="name"
          class="font"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td><v-avatar outline fab>
                <img src="@/assets/build.png" alt="img_user">
              </v-avatar> </td>
              <td>{{ props.item.nombre_comercial }}</td>
              <td >{{ props.item.datosgen }} <br> {{ props.item.rfc }} </td>
              <td >{{ props.item.pais }} <br> {{ props.item.localidad }}</td>
              <td>{{ props.item.tipo }}</td>
              <td>          <v-btn to="/cuentas/formcuentas" slot="activator"
              color="indigo"
              dark>
            <v-icon size=25>edit</v-icon>
          </v-btn></td>

            </tr>
          </template>
        </v-data-table>

      </div>
      <div class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right">
        <v-btn fab dark color="blue" :to="'/cuentas/formcuentas'">
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
          { text: '', sortable: false, value: 'img'},
          {
            text: 'Nombre Comercial',
            align: 'left',
            value: 'nombre_comercial',
          },
          { text: 'Datos Generales', value: 'datosgen' },
          { text: 'Pais y Localidad', value: 'pais'},
          { text: 'Tipo' , value: 'tipo', },
          { text: '' , sortable: false,},
        ],
        desserts: [
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Positive Compliance LLC',
            datosgen: 'Positive Compliance LLC',
            rfc: 'PCO161216LZ4',
            pais: 'México',
            localidad: '07700',
            tipo: 'Positive',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Recurso Confiable',
            datosgen: 'Recurso Confiable SA de CV',
            rfc: 'RCO970529F57',
            pais: 'México',
            localidad: '54030',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'MABE',
            datosgen: 'MABE Mexico',
            rfc: 'MAB 899009 1A7',
            pais: 'México',
            localidad: '11000',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Recubre',
            datosgen: 'SERVIREC SA DE CV',
            rfc: 'SER081204ST9',
            pais: 'México',
            localidad: '54070',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Positive Compliance LLC',
            datosgen: 'Positive Compliance LLC',
            rfc: 'PCO161216LZ4',
            pais: 'México',
            localidad: '07700',
            tipo: 'Positive',

          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Recurso Confiable',
            datosgen: 'Recurso Confiable SA de CV',
            rfc: 'RCO970529F57',
            pais: 'México',
            localidad: '54030',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'MABE',
            datosgen: 'MABE Mexico',
            rfc: 'MAB 899009 1A7',
            pais: 'México',
            localidad: '11000',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Recubre',
            datosgen: 'SERVIREC SA DE CV',
            rfc: 'SER081204ST9',
            pais: 'México',
            localidad: '54070',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Positive Compliance LLC',
            datosgen: 'Positive Compliance LLC',
            rfc: 'PCO161216LZ4',
            pais: 'México',
            localidad: '07700',
            tipo: 'Positive',

          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Recurso Confiable',
            datosgen: 'Recurso Confiable SA de CV',
            rfc: 'RCO970529F57',
            pais: 'México',
            localidad: '54030',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'MABE',
            datosgen: 'MABE Mexico',
            rfc: 'MAB 899009 1A7',
            pais: 'México',
            localidad: '11000',
            tipo: 'GCP',
          },
          {
            img: 'business',
            value: false,
            nombre_comercial: 'Recubre',
            datosgen: 'SERVIREC SA DE CV',
            rfc: 'SER081204ST9',
            pais: 'México',
            localidad: '54070',
            tipo: 'GCP',
          },
        ]
}
}
}
</script>

<style lang="css">

</style>
