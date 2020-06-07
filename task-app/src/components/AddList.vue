<template>
  <v-row class="ma-0">
    <v-col class="pa-0" cols="12">
      <v-form v-model="valid">
        <v-card>
          <v-card-title color="primary" class="pa-1">
            <h5>Add List</h5>
            <v-spacer></v-spacer>
            <v-btn icon @click="closeDialog">
              <v-icon>mdi-close-box</v-icon>
            </v-btn>
          </v-card-title>
          <hr>
          <v-card-text>
            <v-text-field
              v-model="listName"
              :counter="50"
              :rules="nameRules"
              label="Name"
              clearable
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid" @click="addList">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AddList",
  components: {},
  props:{
    currentList: {
      type: Array,
      default:function(){
        return []
      }
    }
  },
  data: function(vm) {
    return {
      valid: true,
      listName: "",
      nameRules: [
        v => !!v || "List Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters",
        v => (v && vm.currentList.indexOf(v) == -1) || "List name already exists, please enter different name"
      ]
    };
  },
  mounted() {
    this.listName = "";
  },
  methods: {
    closeDialog() {
      this.$emit("onClose");
    },
    addList() {
      this.$emit("onAddList", this.listName);
    }

  }
};
</script>
