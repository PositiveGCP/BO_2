<template lang="html">
  <v-navigation-drawer
  permanent
  absolute>

  <div class="userView">
	<h5>GCP</h5>
  <p></p>
	</div>

  <v-layout row>
    <v-flex offset>

        <v-card>
            <v-spacer></v-spacer>
          <v-list>
            <v-list-group
              v-for="item in items"
              v-model="item.active"
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >

              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
                :to="subItem.direction"
              >

                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content >
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>

              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

    </v-navigation-drawer>

</template>

<script>
export default {
  data () {
  return {
    items: [
      {
        // action: 'local_activity',
        title: 'Altas',
        active:true,
        items: [
          {title: 'Personas', action: 'group_add' , direction: '/personas'},
          {title: 'Cuentas', action: 'business' , direction: '/cuentas' },
          {title: 'Usuarios', action: 'account_circle' , direction: '/usuarios' },
          {title: 'Solicitudes', action: 'contact_mail', direction: '/solicitudes'  },

        ]
      },
      {
        title: 'Consultas',
        active: true,
        items: [
          {title: 'Resultados', action: 'offline_pin' , direction: '/resultados' },
          {title: 'Facturacion', action: 'monetization_on', direction: '/facturacion'  },
        ]
      },
      {
        title: 'Soporte',
        active: true,
        items: [
          {title: 'Casos', action: 'storage' , direction: '/casos' },
          {title: 'Contacto', action: 'build' , direction: '/contacto' },
        ]
      },
    ]
  }
}
}
</script>

<style lang="css">
.userView{
  padding-top: 7px;
      background: #3b88de;
      height: 65px;
      width: 300px;
      vertical-align: middle;
      text-align: center;
      color: white;
      font-family: 'Roboto', Arial, sans-serif;
      font-size: 34px;
}
</style>
