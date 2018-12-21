<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Alta de Usuarios</h1>
      <form>
        <v-text-field
          v-validate="'required|max:20'"
          v-model="nombre"
          :counter="20"
          :error-messages="errors.collect('nombre')"
          label="*Nombre"
          data-vv-name="nombre"
          required
        ></v-text-field>
        <table width='100%'>
          <tr>
            <td width='49%'><v-text-field
              v-validate="'required|max:20'"
              v-model="appaterno"
              :counter="20"
              :error-messages="errors.collect('appaterno')"
              label="*Apellido Paterno"
              data-vv-name="appaterno"
              required
            ></v-text-field></td>
            <td width='2%'></td>
            <td width='49%'><v-text-field
              v-validate="'max:20'"
              v-model="apmaterno"
              :counter="20"
              :error-messages="errors.collect('apmaterno')"
              label="Apellido Materno"
              data-vv-name="apmaterno"
              required
            ></v-text-field></td>
          </tr>
        </table>
        <!-- Tabla con Correo y Genero-->
        <!-- FALTA Solo Seleccionar un Genero -->
        <table width='100%'>
          <tr>
            <td width='49%'><v-text-field
              v-validate="'required|email'"
              v-model="email"
              :error-messages="errors.collect('email')"
              label="*Correo Electronico"
              data-vv-name="email"
              required
            ></v-text-field></td>
            <td width='2%'></td>
            <td width='49%'><h4>*Genero</h4>
            <table width='50%'>
              <tr>
                <td><v-checkbox
                  v-validate="'required'"
                  v-model="genero"
                  :error-messages="errors.collect('genero')"
                  value="1"
                  label="Masculino"
                  data-vv-name="genero"
                  type="genero"
                  required
                ></v-checkbox></td>
                <td><v-checkbox
                  v-validate="'required'"
                  v-model="genero"
                  :error-messages="errors.collect('genero')"
                  value="1"
                  label="Femenino"
                  data-vv-name="genero"
                  type="genero"
                  required
                ></v-checkbox></td>
              </tr>
            </table></td>
          </tr>
        </table>
        <table width="100%">
          <tr>
            <td width='19%'> <v-btn large color="blue">Fotografia</v-btn>
            </td>
            <td width='2%'></td>
            <td width='79%'>
            <v-text-field
              value="Fotografia.png"
              solo
              readonly
            ></v-text-field></td>
          </tr>
        </table>
        <table width='100%'>
          <tr>
            <td width='49%'><h4>*Tipo</h4>
            <v-select
              v-validate="'required'"
              :items="tipos"
              v-model="tipo"
              :error-messages="errors.collect('tipo')"
              label="Selecciona"
              data-vv-name="tipo"
              required
            ></v-select></td>
            <td width='2%'></td>
            <td width='49%'><h4>*Empresa</h4>
            <v-select
              v-validate="'required'"
              :items="empresas"
              v-model="empresa"
              :error-messages="errors.collect('empresa')"
              label="Selecciona"
              data-vv-name="empresa"
              required
            ></v-select></td>
          </tr>
        </table>
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
      apmaterno: '',
      identidad: '',
      email: '',
      telefono: '',
      empresa: null,
      tipo: null,
      empresas: [
        'Empresa 1',
        'Empresa 2',
        'Empresa 3',
        'Empresa 4'
      ],
      tipos: [
        'Principal',
        'Coordinador',
        'Evaluador',
      ],
      genero: null,
      dictionary: {
        custom: {
          nombre: {
            required: () => 'El Nombre No Puede Estar Vacio',
            max: 'El Nombre No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          appaterno: {
            required: () => 'El Apellido Paterno No Puede Estar Vacio',
            max: 'El Apellido Paterno No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          apmaterno: {
            max: 'El Apellido Materno No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          empresa: {
            required: 'Debe Seleccionar una Empresa'
          },
          tipo: {
            required: 'Debe Seleccionar un Tipo'
          },
          genero: {
            required: 'Selecciona un Genero'
          },
          email: {
            required: () => 'El Email No Puede Estar Vacio',
            // custom messages
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
        this.apmaterno = ''
        this.identidad = ''
        this.telefono = ''
        this.email = ''
        this.empresa = null
        this.tipo = null
        this.genero = null
        this.$validator.reset()
      }
    }
  }
</script>

<style lang="css">
</style>
