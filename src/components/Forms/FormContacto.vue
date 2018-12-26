<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Generar Ticket</h1>
      <form>
        <table width='100%'>
          <tr>
            <td width='49%'><h4>*Asunto</h4><v-text-field
              v-model="asunto"
              v-validate="'required'"
              :error-messages="errors.collect('asunto')"
              label="Escriba el Asunto"
              data-vv-name="asunto"
              required
            ></v-text-field></td>
            <td width='2%'></td>
            <td width='49%'><h4>*Selecciona una Cuenta</h4>
            <v-select
              v-validate="'required'"
              :items="cuentas"
              v-model="cuenta"
              :error-messages="errors.collect('cuenta')"
              label="Cuentas"
              data-vv-name="cuenta"
              required
            ></v-select></td>
          </tr>
        </table>
        <v-text-field
        v-validate="'required'"
          v-model="descripcion"
          :error-messages="errors.collect('descripcion')"
          label="*Descripción"
          data-vv-name="descripcion"
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
      descripcion: '',
      asunto: '',
      cuenta: null,
      cuentas: [
        'Cuenta 1',
        'Cuenta 2',
        'Cuenta 3',
        'Cuenta 4'
      ],
      dictionary: {
        custom: {
          descripcion: {
            required: () => 'La Descripción No Puede Estar Vacía',
            // custom messages
          },
          asunto: {
            required: () => 'El Asunto No Puede Estar Vacío',
            // custom messages
          },
          cuenta: {
            required: () => 'Seleccione Una Cuenta',
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
        this.descripcion = ''
        this.asunto = ''
        this.empresa = null
        this.cuenta = null
        this.genero = null
        this.$validator.reset()
      }
    }
  }
</script>

<style lang="css">
</style>
