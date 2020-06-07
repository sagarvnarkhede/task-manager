<template>
  <v-app>
    <v-app-bar
     app
      color="primary"
      dark
      height="55px"
    >
    <v-icon large="" class="mr-1">mdi-domain</v-icon>
    <h4>Task Manger</h4>
    <v-spacer></v-spacer>
    <h5 class="pointer" @click="logout"><v-icon class="mr-1">mdi-account</v-icon>Logout</h5>
    </v-app-bar>
    <v-content class="content-area-background-color">
      
        <v-container fluid>
          <router-view />
        </v-container>

    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Container',

    data: () => ({
      
    }),
    methods:{
      logout(){
        this.$router.push({path:"/"});
      }
    }
  }
</script>
<style lang="scss">
.content-area-background-color {
  background-color: var(--content-area-background-color) !important;
}
.pointer{
  cursor: pointer;
}
</style>


