<template>
<v-app>
  <v-app-bar app
      color="#072747"
      clipped-left
      class="elevation-2 h-rem-4"
  dense
    >
    <v-app-bar-nav-icon @click="toggleDrawer" style="color:#fff;"></v-app-bar-nav-icon>
    <v-icon color="#fff" class="mr-1">mdi-brain</v-icon>
    <h4 style="color:#fff">BRAIN CELLS</h4>
    <v-spacer></v-spacer>
     <h5 class="pointer" style="color:#fff" @click="logout"><v-icon class="mr-1" color="#fff">mdi-account</v-icon>Logout</h5>
  </v-app-bar>
  <sidebar ref="sideBarComponent"></sidebar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

 
</v-app>


  <!-- <v-app>
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
    <sidebar></sidebar>
    <v-content class="content-area-background-color">
      
        <v-container fluid>
          <router-view />
        </v-container>

    </v-content>
  </v-app> -->
</template>

<script>
 import sidebar from './sideBar';
  export default {
    components: {sidebar},
    name: 'Container',

    data: () => ({
      
    }),
    methods:{
      logout(){
        this.$router.push({path:"/"});
      },
      toggleDrawer(){
        this.$refs.sideBarComponent.mini = !this.$refs.sideBarComponent.mini;
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


