<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Alta de Cuentas GCP</h1>
      <form>
        <v-text-field
          v-validate="'required|max:20'"
          v-model="nombre_comercial"
          :counter="20"
          :error-messages="errors.collect('nombre_comercial')"
          label="*Nombre Comercial"
          data-vv-name="nombre_comercial"
          required
        ></v-text-field>
        <!-- ID Fiscal y Razon Social -->
        <table width="100%">
          <tr>
            <td width='49%'><v-text-field
              v-validate="'required|max:20'"
              v-model="id_fiscal"
              :counter="20"
              :error-messages="errors.collect('id_fiscal')"
              label="*ID Fiscal"
              data-vv-name="id_fiscal"
              required
            ></v-text-field></td>
            <td width='2%'></td>
            <td width='49%'><v-text-field
              v-validate="'max:20'"
              v-model="razon_social"
              :counter="20"
              :error-messages="errors.collect('razon_social')"
              label="Razon Social"
              data-vv-name="razon_social"
              required
            ></v-text-field></td>
          </tr>
        </table>
        <!-- Logotipo -->
        <table width="100%">
          <tr>
            <td width='19%'> <v-btn large color="blue">Logotipo</v-btn>
            </td>
            <td width='2%'></td>
            <td width='79%'>
            <v-text-field
              value="Logotipo.png"
              solo
              readonly
            ></v-text-field></td>
          </tr>
        </table>
        <!-- Pais y Codigo Postal -->
        <table width="100%">
          <tr>
            <td width='49%'><v-text-field
              v-validate="'required|max:20'"
              v-model="pais"
              :counter="20"
              :error-messages="errors.collect('pais')"
              label="*Pais"
              data-vv-name="pais"
              required
            ></v-text-field></td>
            <td width='2%'></td>
            <td width='49%'><v-text-field
              v-validate="'required|max:20'"
              v-model="codigopostal"
              :counter="20"
              :error-messages="errors.collect('codigopostal')"
              label="*Codigo Postal"
              data-vv-name="codigopostal"
              required
            ></v-text-field></td>
          </tr>
        </table>
        <!-- Direccion Fiscal -->
        <v-text-field
          v-model="direccion_fiscal"
          label="Dirección Fiscal"
          data-vv-name="direccion_fiscal"
          required
        ></v-text-field>
        <!-- Direccion Fisica -->
        <v-text-field
          v-model="direccion_fisica"
          label="Dirección Fisica"
          data-vv-name="direccion_fisica"
          required
        ></v-text-field>
        <!-- Condiciones Comerciales -->
        <v-text-field
          v-model="condiciones_comerciales"
          label="Condiciones Comercialaes"
          data-vv-name="condiciones_comerciales"
          required
        ></v-text-field>
        <h1>Contactos de Pagos</h1>
        <!--  Contacto de Pagos -->
        <v-text-field
          v-model="contacto_pagos"
          label="Contacto"
          data-vv-name="contacto_pagos"
          required
        ></v-text-field>
        <!--  Correo de Pagos, Telefono de Pagos y Ext de Pagos-->
        <table width="100%">
          <tr>
            <td width="49%"><v-text-field
              v-model="correo_pagos"
              label="Correo Electronico"
              data-vv-name="correo_pagos"
              required
            ></v-text-field></td>
            <td width="2%"></td>
            <td width="29%"><v-text-field
              v-model="telefono_pagos"
              label="Telefono"
              data-vv-name="telefono_pagos"
              required
            ></v-text-field></td>
            <td width="2%"></td>
            <td width="18%"><v-text-field
              v-model="ext_pagos"
              label="Ext"
              data-vv-name="ext_pagos"
              required
            ></v-text-field></td>
          </tr>
        </table>
        <h1>Contactos de Principal</h1>
        <!--  Contacto de Pagos -->
        <v-text-field
          v-model="contacto_principal"
          label="Contacto"
          data-vv-name="contacto_principal"
          required
        ></v-text-field>
        <!--  Correo de Pagos, Telefono de Pagos y Ext de Pagos-->
        <table width="100%">
          <tr>
            <td width="49%"><v-text-field
              v-model="correo_principal"
              label="Correo Electronico"
              data-vv-name="correo_principal"
              required
            ></v-text-field></td>
            <td width="2%"></td>
            <td width="29%"><v-text-field
              v-model="telefono_principal"
              label="Telefono"
              data-vv-name="telefono_principal"
              required
            ></v-text-field></td>
            <td width="2%"></td>
            <td width="18%"><v-text-field
              v-model="ext_principal"
              label="Ext"
              data-vv-name="ext_principal"
              required
            ></v-text-field></td>
          </tr>
        </table>
        <h1>Correo de Notificaciones</h1>
        <h4>A esta dirección se notificara cada que se realice una evaluación.</h4>
        <table width="100%">
          <tr>
            <td width="49%"><v-text-field
              v-model="contacto_notificaciones"
              label="Contacto"
              data-vv-name="contacto_notificaciones"
              required
            ></v-text-field></td>
            <td width="2%"></td>
            <td width="49%"><v-text-field
              v-model="correo_notificaciones"
              label="Correo Electronico"
              data-vv-name="correo_notificaciones"
              required
            ></v-text-field></td>
          </tr>
        </table>
        <h1>Usuario de la Cuenta</h1>
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
        <!-- FALTA Solo Seleccionar un Genero -->
        <!-- Tabla con Telefono y Genero -->
        <table width='100%'>
          <tr>
            <td width='49%'><v-text-field
              v-validate="'required|email'"
              v-model="email"
              :error-messages="errors.collect('email')"
              label="*Correo Electronico"
              data-vv-name="email"
              required
            ></v-text-field></td></td>
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
        <!-- Logotipo -->
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
      nombre_comercial: '',
      id_fiscal: '',
      razon_social: '',
      pais: '',
      codigopostal: '',
      direccion_fiscal: '',
      direccion_fisica: '',
      condiciones_comerciales: '',
      contacto_pagos: '',
      correo_pagos: '',
      telefono_pagos: '',
      ext_pagos: '',
      contacto_principal: '',
      correo_principal: '',
      telefono_principal: '',
      ext_principal: '',
      contacto_notificaciones: '',
      correo_notificaciones: '',
      nombre: '',
      appaterno: '',
      apmaterno: '',
      email: '',
      genero: null,
      dictionary: {
        custom: {
          nombre_comercial: {
            required: () => 'El Nombre Comercial No Puede Estar Vacio.',
            max: 'El Nombre Comercial No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          id_fiscal: {
            required: () => 'El ID Fiscal No Puede Estar Vacio.',
            max: 'El ID Fiscal No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          razon_social: {
            max: 'La Razon Social No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          pais: {
            required: () => 'El Pais No Puede Estar Vacio.',
            max: 'El Pais No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          codigopostal: {
            required: () => 'El Codigo Postal No Puede Estar Vacio.',
            max: 'El Codigo Postal No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          nombre: {
            required: () => 'El Nombre No Puede Estar Vacio.',
            max: 'El Nombre No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          appaterno: {
            required: () => 'El Nombre No Puede Estar Vacio.',
            max: 'El Apellido Paterno No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          apmaterno: {
            max: 'El Apellido Materno No Puede Contener Más De 20 Caracteres'
            // custom messages
          },
          email: {
            required: () => 'El Correo Electronico No Puede Estar Vacio.',
            // custom messages
          },
          genero: {
            required: 'Selecciona un Genero'
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
        this.nombre_comercial = ''
        this.id_fiscal = ''
        this.razon_social = ''
        this.pais = ''
        this.codigopostal = ''
        this.direccion_fiscal = ''
        this.direccion_fisica = ''
        this.condiciones_comerciales = ''
        this.contacto_pagos = ''
        this.correo_pagos = ''
        this.telefono_pagos = ''
        this.ext_pagos = ''
        this.contacto_principal = ''
        this.correo_principal = ''
        this.telefono_principal = ''
        this.ext_principal = ''
        this.contacto_notificaciones = ''
        this.correo_notificaciones = ''
        this.nombre = ''
        this.appaterno = ''
        this.apmaterno = ''
        this.email = ''
        this.genero = null
        this.$validator.reset()
      }
    }
  }
</script>

<style lang="css">
</style>
