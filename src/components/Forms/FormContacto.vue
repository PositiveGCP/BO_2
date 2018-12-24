<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Generar Ticket</h1>
      <form>
        <table width='100%'>
          <tr>
            <td width='49%'><h4>*Asunto</h4><v-text-field
              v-model="appaterno"
              :error-messages="errors.collect('appaterno')"
              label="Escriba el Asunto"
              data-vv-name="appaterno"
              required
            ></v-text-field></td>
            <td width='2%'></td>
            <td width='49%'><h4>*Selecciona una Cuenta</h4>
            <v-select
              v-validate="'required'"
              :items="encuestas"
              v-model="encuesta"
              :error-messages="errors.collect('encuesta')"
              label="Cuentas"
              data-vv-name="encuesta"
              required
            ></v-select></td>
          </tr>
        </table>
        <v-text-field
          v-model="nombre"
          :error-messages="errors.collect('nombre')"
          label="*Descripción"
          data-vv-name="nombre"
          required
        ></v-text-field>
        <v-btn @click="clear">Borrar</v-btn>
        <v-btn @click="submit">Aceptar</v-btn>
        <h5>* Campos Obligatorios</h5>

      </form>
    </v-app>
  </div>
</template>

<script>

export default {

  data: () => ({
      nombre: '',
      appaterno: '',
      encuesta: null,
      encuestas: [
        'Encuesta 1',
        'Encuesta 2',
        'Encuesta 3',
        'Encuesta 4'
      ],
      dictionary: {
        custom: {
          nombre: {
            required: () => 'El Nombre No Puede Estar Vacio.',
            // custom messages
          },
          appaterno: {
            required: () => 'El Nombre No Puede Estar Vacio.',
            // custom messages
          },
          encuesta: {
            required: () => 'El Nombre No Puede Estar Vacio.',
          },
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.nombre = ''
        this.appaterno = ''
        this.encuesta = null
        this.$validator.reset()
      }
    }
  }
</script>

<style lang="css">
</style>
