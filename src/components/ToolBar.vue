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
         src="@/assets/logo.png"
         alt="img_user"
       >
     </v-avatar>
     <h3>José Manuel Fragoso Oseguera</h3>

     <v-avatar size="35">
        <img
          src="@/assets/logo.png"
          alt="img_user"
        >
      </v-avatar>
      <h3>Positive Compliance LLC</h3>

<v-btn to="/resultados"outline small fab color="black">
        <v-icon>help_outline</v-icon>
      </v-btn>

<v-btn outline small fab color="black">
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
