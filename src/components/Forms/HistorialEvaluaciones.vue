<template lang="html">
<div id="historial">
  <h1>Programar Evaluacion</h1>
  <table width="100%">
    <tr>
      <td width="50%"><v-select
        v-validate="'required'"
        :items="encuestas"
        v-model="encuesta"
        :error-messages="errors.collect('encuesta')"
        label="*Encuesta"
        data-vv-name="encuesta"
        required
      ></v-select></td>
      <td width="50%">
        <v-btn @click="submit">Aceptar <v-icon size=20>send</v-icon>
        </v-btn></td>
    </tr>
  </table>

  <h1>Historial de Evaluaciones</h1>
  <v-data-table
      :headers="headers"
      :items="desserts"
      hide-actions
      item-key="name"
    >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.posicion }}</td>
          <td>{{ props.item.fecha }}</td>
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.activo }}</td>
          <td > <v-btn to="/personas/historialevaluaciones" outline small fab color="black">
        <v-icon size=25>print</v-icon>
      </v-btn></td>

        </tr>
      </template>
    </v-data-table>
</div>
</template>

<script>
export default {
  data: () => ({
    encuesta: null,
      encuestas: [
        'Encuesta 1',
        'Encuesta 2',
        'Encuesta 3',
        'Encuesta 4'
      ],
      dictionary: {
        custom: {
          encuesta: {
            required: 'Debe Seleccionar una Encuesta'
          },
        }
      },
      headers: [
              { text: 'Posicion', value: 'posicion' },
              { text: 'Fecha', value: 'fecha'},
              { text: 'ID', value: 'id' },
              { text: 'Activo', value: 'activo' },
              { text: 'Codigo' , sortable: false, value: 'iron' },
            ],
            desserts: [
              {
                value: false,
                posicion: 'Posicion',
                fecha: '2018/09/08 08:04:11',
                id: 'GCP-4LR1QBZ8GFSW',
                activo: 'SI',
                iron: 'lapiz verde',
              },
              {
                value: false,
                posicion: 'Aosicion',
                fecha: '2018/09/10 08:04:11',
                id: 'GCP-4LR1QBZ8GFSW',
                activo: 'SI',
                iron: 'lapiz verde',
              },

            ]
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
    }
  }
</script>

<style lang="css">
</style>
