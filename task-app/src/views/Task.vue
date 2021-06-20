<template>
  <v-row class="pa-2 taskContainer">
    <h4>Dashboard</h4>
  </v-row>
</template>


 <script>
export default {
   name: "Task",
}
// import draggable from "vuedraggable";
// import addList from "@/components/AddList";
// import createTask from "@/components/createTask";
// import apiService from "@/TaskService";
// import _map from "lodash/map";
// export default {
//   name: "Task",
//   components: {
//     draggable,
//     addList,
//     createTask
//   },
//   data: () => ({
//     isCreateTaskList: false,
//     isCreateTask: false,
//     listToAddCard: "",
//     taskList: [
//     ]
//   }),
//   mounted() {
//     apiService.get("/task").then(resp => {
//       this.taskList = resp.data;
//     });
//   },

//   computed: {
//     getTaskNameList() {
//       return _map(this.taskList, "name");
//     }
//   },

//   methods: {
//     updateList() {
//       let list = JSON.parse(JSON.stringify(this.taskList));
//       apiService.put("/taskList",list).then(() => {
//        this.refreshList();
//     });
//     },
//     addTaskList() {
//       this.isCreateTaskList = true;
//     },
//     addTask(v, index) {
//       this.isCreateTask = true;
//       this.listToAddCard = { name: v.name, index: index };
//     },
//     createTask(taskname) {
//       const that = this;
//       let obj = {
//         name : that.listToAddCard.name,
//         card: { name: taskname }
//       };
//       apiService.post("/card",obj).then(() => {
//        this.refreshList();
//     }).finally(()=>{
//       this.closeAddTask();
//     });
      
//     },
//     refreshList(){
//        apiService.get("/task").then(resp => {
//        this.taskList = resp.data;
//     });
//     },
//     addList(listName) {
//       let obj = {
//         name: listName,
//         data: []
//       };
//       apiService.post("/task",obj).then(() => {
//        this.refreshList();
//     });
//       this.closeAddTaskList();
//     },
//     removeList(v, index) {
//       let resp =  confirm("Do you want to Delete List");
//       if(resp){
//        this.taskList.splice(index, 1);
//        this.updateList();
//      }
//     },
//     deleteCard(v, index) {
//      let resp =  confirm("Do you want to Delete Card");
//      if(resp){
//        v.data.splice(index, 1);
//        this.updateList();
//      }
      
//     },
//     closeAddTaskList() {
//       this.isCreateTaskList = false;
//     },
//     closeAddTask() {
//       this.isCreateTask = false;
//     }
//   }
// };

 </script>

<style lang="scss" scoped>
.taskContainer {
  .task {
    max-height: 500px;
    overflow: auto;
  }
}
</style>

