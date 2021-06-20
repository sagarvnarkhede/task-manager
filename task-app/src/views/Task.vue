<template>
  <v-row class="pa-2 taskContainer">
    <h4>Dashboard</h4>
     <!-- <section>


            <center>

            <ul id="slider">
                <li>
                    <p style="position:absolute;" id="0" value=" Get Ready for Bit Cards" ><div style='width:0; height:0; padding:100%; background: url("https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png") no-repeat center fixed; background-size: contain;'  ></div></p>
                </li>

                <li>
                            <p id="1" value="Well done"><img src="https://5.imimg.com/data5/CV/DR/MY-4742890/fresh-orange-500x500.jpg" /></p>
                      </li>

            </ul>
            </center>

    </section> -->
    <v-btn @click="speak('HI Sagar')">Speak</v-btn>
     <button>Start the Exercise </button>
  </v-row>
</template>


 <script>
// export default {
//    name: "Task",
// }
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
    voices:[],
    taskList: [
    ]
  }),
  mounted() {
    // apiService.get("/task").then(resp => {
    //   this.taskList = resp.data;
    // });
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.cancel();
       this.voices = window.speechSynthesis.getVoices();
    };
  },

  computed: {
    getTaskNameList() {
      return _map(this.taskList, "name");
    }
  },

  methods: {
    speak(text) {
      var msg = new SpeechSynthesisUtterance();
     // Set the attributes.
     msg.volume = parseFloat("1.2");
     msg.rate = parseFloat("1.1");
     msg.pitch = parseFloat("1");
      // Create a new instance of SpeechSynthesisUtterance.
      // Set the text.
        msg.text = text;
        if (!msg.voice){
            if(this.voices){
                msg.voice = this.voices.filter(function(voice) { return voice.name == 'Google हिन्दी'; })[0];
            }
        }
      // Queue this utterance.
        window.speechSynthesis.speak(msg);
    },
    loadExcerSize(){
      // stopButton.style.display = "block";
      //       button.style.display = "none";

            //toastr.info('Hit Escape key to leave the Full Screen Mode.');
      alert(1);
            const slideDelay = 1350;
            const dynamicSlider = document.getElementById("slider");

            //Switch to Fullscreen mode
            if (dynamicSlider.requestFullscreen) {
                dynamicSlider.requestFullscreen();
              } else if (dynamicSlider.webkitRequestFullscreen) { /* Safari */
                dynamicSlider.webkitRequestFullscreen();
              } else if (dynamicSlider.msRequestFullscreen) { /* IE11 */
                dynamicSlider.msRequestFullscreen();
              }
              this.slideShow(dynamicSlider,0);
    },



   slideShow(dynamicSlider, curSlide){
            window.speechSynthesis.cancel();
            if (curSlide === dynamicSlider.childElementCount) {
                 window.location.reload();
            }
            else{
                var thisSlide = document.getElementById(curSlide).getAttribute('value');
            }
            if (thisSlide){
                msg.text = thisSlide;
                if(voices){
                    msg.voice = voices.filter(function(voice) { return voice.name == 'Google हिन्दी'; })[0];
                }
                window.speechSynthesis.speak(msg);
                msg.onend = function(event) {
                    curSlide++;
                    dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
                    slideShow(dynamicSlider, curSlide);
                }
            }

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

