<template>
  <v-app>
    <v-main>
      <v-row :align="'center'" justify="center" class="center-align">
        <v-col xs="10" sm="10" md="4" lg="4">
          <v-card class="pa-4">
            
            <v-card-title class="justify-center">
              <h4><v-icon style="color:green" class="mr-1">mdi-brain</v-icon>Brain Cells</h4>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="Username" label="Username"></v-text-field>
                <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
              </v-form>
            </v-card-text> 
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        </v-row>
    </v-main>
  </v-app>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Login",
  components: {},
  methods: {
    login() {
      this.$router.push({ path: "home/task" });
    }
  }
};
</script>
<style scoped>
.center-align{
  position: relative;
  top: 30vh;
}
</style>

