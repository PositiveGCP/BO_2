<template lang="html">
  <div>
  <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
    >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td><v-avatar outline fab>
            <img src="@/assets/masculino.png" alt="img_user">
          </v-avatar></td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.area }}</td>
          <td>{{ props.item.entidad }} <br> {{ props.item.evaluacion }}</td>
          <td>{{ props.item.fecha }}</td>
          <td>{{ props.item.semaforo }}</td>
          <td>
            <v-tooltip left>
            <v-menu
                   v-model="menu"
                   :close-on-content-click="false"
                   :nudge-width="200"
                   offset-x
                   slot="activator"
                 >
                   <v-btn
                     slot="activator"
                     color="indigo"
                     dark
                   >
                   <v-icon size=25>edit</v-icon>
                   </v-btn>

                   <v-card>
                     <v-list>
                       <v-list-tile avatar>
                         <v-list-tile-avatar>
                           <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                         </v-list-tile-avatar>

                         <v-list-tile-content>
                           <v-list-tile-title>Angel Rodríguez Valladarest</v-list-tile-title>
                           <v-list-tile-sub-title>GCP Cumplimiento Institucional</v-list-tile-sub-title>
                         </v-list-tile-content>

                       </v-list-tile>
                     </v-list>

                     <v-divider></v-divider>

                     <v-list>
                       <h3> Semáforo:</h3>
                       <v-select
                         v-validate="'required'"
                         :items="semaforos"
                         v-model="semaforo"
                         label="Semáforo"
                         data-vv-name="Seleccione una Opción"
                         required
                       ></v-select>
                        <h3> Comentarios:</h3>
                           <v-textarea
                           name="input-7-4"
                           label="Análisis de Resultados"
                           value=""
                           ></v-textarea>
                     </v-list>

                     <v-card-actions>
                       <v-spacer></v-spacer>

                       <v-btn flat @click="menu = false">Cancel</v-btn>
                       <v-btn color="primary" flat @click="menu = false">Save</v-btn>
                     </v-card-actions>
                   </v-card>
                 </v-menu>
                 <span>AGREGAR PARÁMETROS</span>
               </v-tooltip>
               </td>
          <td>
            <v-tooltip left>
        <v-btn
        slot="activator"
        class="white--text"
        color="blue darken-1">
        <v-icon size=25>description</v-icon>
      </v-btn>
      <span>REPORTE GCP</span>
    </v-tooltip>

    </td>

        </tr>
      </template>
    </v-data-table>
    <div class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right">
      <v-speed-dial
        v-model="fab"
        :open-on-hover="hover"
        :transition="transition"
      >
        <v-btn fab dark slot="activator" v-model="fab" color="blue">
          <v-icon >add</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-tooltip left>
        <v-btn
          fab
          dark
          small
          color="green"
          slot="activator"
          >
            <v-icon>insert_chart</v-icon>
        </v-btn>
        <span>DESCARGAR REPORTE DINAMICAS</span>
        </v-tooltip>
        <v-tooltip left>
        <v-btn
          fab
          dark
          small
          color="red"
          slot="activator"
        >
            <v-icon>filter_list</v-icon>
        </v-btn>
        <span>FILTRAR BÚSQUEDA</span>
        </v-tooltip>
      </v-speed-dial>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      semaforo: null,
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      menu: false,

      transition: 'slide-y-reverse-transition',
      semaforos: [
        'Riesgo',
        'Carente',
        'Regular',
        'Bien',
        'Excelente'
      ],
      headers: [{
          text: '',
          sortable: false,
          value: 'img'
        },
        {
          text: 'Nombre',
          align: 'left',
          value: 'name'
        },
        {
          text: 'Área',
          value: 'area'
        },
        {
          text: 'Entidad',
          value: 'entidad'
        },
        {
          text: 'Fecha',
          value: 'fecha'
        },
        {
          text: 'Semáforo',
          value: 'semaforo'
        },
        {
          text: '',
          sortable: false,
          value: 'iron'
        },
        {
          text: '',
          sortable: false,
          value: 'reporte'
        }

      ],
      desserts: [{
          img: 'logo',
          value: false,
          name: 'Daniel Rodríguez Valladarest Carrillo',
          area: 'Seguridad',
          entidad: 'CONFIANZA',
          evaluacion: 'Operador',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Excelente',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },
        {
          img: 'logo',
          value: false,
          name: 'Angel Rodríguez Valladarest',
          area: 'Seguridad',
          entidad: 'CONFIANZA',
          evaluacion: 'GCP Cumplimiento Institucional',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Excelente',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },
        {
          img: 'logo',
          value: false,
          name: 'Javier Rodríguez Valladarest',
          area: 'Seguridad',
          entidad: 'CONFIANZA',
          evaluacion: 'GCP Cumplimiento Institucional',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Excelente',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },
        {
          img: 'logo',
          value: false,
          name: 'Javier Rodríguez Valladarest',
          area: 'Seguridad',
          entidad: 'CONFIANZA',
          evaluacion: 'GCP Cumplimiento Institucional',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Excelente',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },
        {
          img: 'logo',
          value: false,
          name: 'Avier Rodríguez Valladarest',
          area: 'Beguridad',
          entidad: 'CONFIANZA',
          evaluacion: 'GCP Cumplimiento Institucional',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Excelente',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },
        {
          img: 'logo',
          value: false,
          name: 'Cavier Rodríguez Valladarest',
          area: 'Aeguridad',
          entidad: 'BONFIANZA',
          evaluacion: 'GCP Cumplimiento Institucional',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Excelente',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },
        {
          img: 'logo',
          value: false,
          name: 'Davier Rodríguez Valladarest',
          area: 'Eeguridad',
          entidad: 'NFIANZA',
          evaluacion: 'GCP Cumplimiento Institucional',
          fecha: '2018/09/08 08:04:11',
          semaforo: 'Regular',
          iron: 'lapiz verde',
          reporte: 'reporte'
        },

      ]
    }
  },
  watch: {
    dialog(val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    }
  }
}
</script>

<style lang="css">
</style>
