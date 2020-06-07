<template>
  <v-row class="ma-0">
    <v-col class="pa-0" cols="12">
      <v-form v-model="valid">
        <v-card>
          <v-card-title color="primary" class="pa-1">
            <h5>Create Task</h5>
            <v-spacer></v-spacer>
            <v-btn icon @click="closeDialog">
              <v-icon>mdi-close-box</v-icon>
            </v-btn>
          </v-card-title>
          <hr>
          <v-card-text>
            <v-text-field
              v-model="taskName"
              :counter="50"
              :rules="nameRules"
              label="Name"
              clearable
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid" @click="addTask">Submit</v-btn>
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
  data: function() {
    return {
      valid: true,
      taskName: "",
      nameRules: [
        v => !!v || "Task Name is required",
      ]
    };
  },
  mounted() {
    this.taskName = "";
  },
  methods: {
    closeDialog() {
      this.$emit("onClose");
    },
    addTask() {
      this.$emit("onAddTask", this.taskName);
    }

  }
};
</script>
