<template>
  <v-row class="pa-2 taskContainer">
    <v-col md="3" lg="3" xs="10" sm="10" v-for="(v,index) in taskList" :key="index">
      <v-card class="task pa-2" color="#cbd9ea">
        <v-card-title class="pa-1 title">
          {{v.name}}
          <v-spacer></v-spacer>
          <v-btn icon @click="removeList(v,index)">
            <v-icon>mdi-close-box</v-icon>
          </v-btn>
        </v-card-title>
        <hr>
        <draggable class="list-group mt-2" group="task" :list="v.data" @change="updateList">
          <v-card class="ma-1 pa-2" height="50" v-for="(item,indx) in v.data" :key="item.name">
            <v-card-title class="pa-1 subtitle-2">
              {{item.name}}
              <v-spacer></v-spacer>
              <v-btn icon x-small @click="deleteCard(v,indx)">
                <v-icon>mdi-close-box</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </draggable>
        <v-btn class="ma-1 pa-2" color="#082fc3" text small @click="addTask(v,index)">
          <v-icon small>mdi-plus</v-icon>Add Card
        </v-btn>
      </v-card>
    </v-col>
    <v-col md="3" lg="3" xs="10" sm="10">
      <v-btn color="#082fc3" text @click="addTaskList">
        <v-icon small>mdi-plus</v-icon>Add List
      </v-btn>
    </v-col>

    <v-dialog v-model="isCreateTaskList" width="500" persistent>
      <addList
        v-if="isCreateTaskList"
        :currentList="getTaskNameList"
        @onClose="closeAddTaskList"
        @onAddList="addList"
      ></addList>
    </v-dialog>
    <v-dialog v-model="isCreateTask" width="500" persistent>
      <createTask v-if="isCreateTask" @onClose="closeAddTask" @onAddTask="createTask"></createTask>
    </v-dialog>
  </v-row>
</template>

<script>
import draggable from "vuedraggable";
import addList from "@/components/AddList";
import createTask from "@/components/createTask";
import apiService from "@/TaskService";
import _map from "lodash/map";
export default {
  name: "Task",
  components: {
    draggable,
    addList,
    createTask
  },
  data: () => ({
    isCreateTaskList: false,
    isCreateTask: false,
    listToAddCard: "",
    taskList: [
    ]
  }),
  mounted() {
    apiService.get("/task").then(resp => {
      this.taskList = resp.data;
    });
  },

  computed: {
    getTaskNameList() {
      return _map(this.taskList, "name");
    }
  },

  methods: {
    updateList() {
      let list = JSON.parse(JSON.stringify(this.taskList));
      apiService.put("/taskList",list).then(() => {
       this.refreshList();
    });
    },
    addTaskList() {
      this.isCreateTaskList = true;
    },
    addTask(v, index) {
      this.isCreateTask = true;
      this.listToAddCard = { name: v.name, index: index };
    },
    createTask(taskname) {
      const that = this;
      let obj = {
        name : that.listToAddCard.name,
        card: { name: taskname }
      };
      apiService.post("/card",obj).then(() => {
       this.refreshList();
    }).finally(()=>{
      this.closeAddTask();
    });
      
    },
    refreshList(){
       apiService.get("/task").then(resp => {
       this.taskList = resp.data;
    });
    },
    addList(listName) {
      let obj = {
        name: listName,
        data: []
      };
      apiService.post("/task",obj).then(() => {
       this.refreshList();
    });
      this.closeAddTaskList();
    },
    removeList(v, index) {
      let resp =  confirm("Do you want to Delete List");
      if(resp){
       this.taskList.splice(index, 1);
       this.updateList();
     }
    },
    deleteCard(v, index) {
     let resp =  confirm("Do you want to Delete Card");
     if(resp){
       v.data.splice(index, 1);
       this.updateList();
     }
      
    },
    closeAddTaskList() {
      this.isCreateTaskList = false;
    },
    closeAddTask() {
      this.isCreateTask = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.taskContainer {
  .task {
    max-height: 500px;
    overflow: auto;
  }
}
</style>

