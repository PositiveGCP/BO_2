<template lang="html">
  <div>
  <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
    >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td rowspan="2"><v-avatar outline fab>
        <v-icon size=42>account_circle</v-icon>
      </v-avatar></td>
          <td rowspan="2">{{ props.item.name }}</td>
          <td rowspan="2">{{ props.item.area }}</td>
          <td>{{ props.item.entidad }}</td>
          <td rowspan="2">{{ props.item.fecha }}</td>
          <td rowspan="2">{{ props.item.semaforo }}</td>
          <td rowspan="2">
            <v-menu
                   v-model="menu"
                   :close-on-content-click="false"
                   :nudge-width="200"
                   offset-x
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

                         <v-list-tile-action>
                           <v-btn
                             :class="fav ? 'red--text' : ''"
                             icon
                             @click="fav = !fav"
                           >
                             <v-icon>find_in_page</v-icon>
                           </v-btn>
                         </v-list-tile-action>
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
               </td>

          <td rowspan="2"><v-btn
        :disabled="dialog"
        :loading="dialog"
        class="white--text"
        color="blue darken-1"
        @click="dialog = true">
        <v-icon size=25>description</v-icon>
      </v-btn>
      <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
      >
      <v-card
        color="primary"
        dark
      >
     <v-card-text>
       Generando Reporte GCP
       <v-progress-linear
         indeterminate
         color="white"
         class="mb-0"
       ></v-progress-linear>
     </v-card-text>
   </v-card>
 </v-dialog>
    </td>

        </tr>
        <tr>
          <td>{{ props.item.evaluacion }}</td>
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
  semaforo: null,
  semaforos: [
    'Riesgo',
    'Carente',
    'Regular',
    'Bien',
    'Excelente'
  ],
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
            evaluacion: 'Operador',
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
            evaluacion: 'GCP Cumplimiento Institucional',
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
            evaluacion: 'GCP Cumplimiento Institucional',
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
     evaluacion: 'GCP Cumplimiento Institucional',
     fecha: '2018/09/08 08:04:11',
     semaforo: 'Excelente',
     iron: 'lapiz verde',
     reporte:'reporte'
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
   reporte:'reporte'
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
 reporte:'reporte'
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
reporte:'reporte'
},

        ]
}
},
watch: {
  dialog (val) {
    if (!val) return

    setTimeout(() => (this.dialog = false), 4000)
  }
}
}
</script>

<style lang="css">
</style>
