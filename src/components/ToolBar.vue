<template lang="html">
  <v-toolbar color="grey lighten-5" app absolute>
    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Buscar ..."
      prepend-inner-icon="search"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-avatar size="35">
       <img
         src="@/assets/masculino.png"
         alt="img_user"
       >
     </v-avatar>
     <h4>José Manuel Fragoso Oseguera</h4>

     <v-avatar size="35">
        <img
          src="@/assets/logo.png"
          alt="img_user"
        >
      </v-avatar>
      <h4>Positive Compliance LLC</h4>

<v-btn to="/resultados" color="blue-grey" dark>
        <v-icon>help_outline</v-icon>
      </v-btn>

<v-btn color="red darken-1" dark>
        <v-icon>close</v-icon>
      </v-btn>

  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
