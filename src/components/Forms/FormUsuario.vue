<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Alta de Personas</h1>
      <form>
        <v-text-field
          v-validate="'required|max:20'"
          v-model="nombre"
          :counter="20"
          :error-messages="errors.collect('nombre')"
          label="Nombre"
          data-vv-name="nombre"
          required
        ></v-text-field>
        <v-text-field
          v-validate="'max:20'"
          v-model="appaterno"
          :counter="20"
          :error-messages="errors.collect('appaterno')"
          label="Apellido Paterno"
          data-vv-name="appaterno"
          required
        ></v-text-field>
        <v-text-field
          v-validate="'email'"
          v-model="email"
          :error-messages="errors.collect('email')"
          label="Correo Electronico"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-select
          v-validate="'required'"
          :items="items"
          v-model="select"
          :error-messages="errors.collect('select')"
          label="Empresa"
          data-vv-name="select"
          required
        ></v-select>
        <v-checkbox
          v-validate="'required'"
          v-model="checkbox"
          :error-messages="errors.collect('checkbox')"
          value="1"
          label="Acepto Terminos"
          data-vv-name="checkbox"
          type="checkbox"
          required
        ></v-checkbox>

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-app>
  </div>
</template>

<script>

export default {

  data: () => ({
      nombre: '',
      appaterno: '',
      email: '',
      select: null,
      items: [
        'Empresa 1',
        'Empresa 2',
        'Empresa 3',
        'Empresa 4'
      ],
      checkbox: null,
      dictionary: {
        custom: {
          nombre: {
            required: () => 'El Nombre No Puede Estar Vacio.',
            max: 'El Nombre No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          appaterno: {
            max: 'El Apellido No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          select: {
            required: 'Debe Seleccionar una Empresa'
          },
          checkbox: {
            required: 'Debes Aceptar los Terminos y Condiciones'
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
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>

<style lang="css">
</style>
