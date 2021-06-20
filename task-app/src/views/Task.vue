<template>
  <v-row class="pa-2 taskContainer">
    <h4>Dashboard</h4>
    <v-btn @click="speak('HI Sarita ,Ary you stupid')">Speak</v-btn>
  </v-row>
</template>


 <script>
// export default {
//    name: "Task",
// }
// import draggable from "vuedraggable";
// import addList from "@/components/AddList";
// import createTask from "@/components/createTask";
// import apiService from "@/TaskService";
// import _map from "lodash/map";
export default {
  name: "Task",
  components: {},
  data: () => ({
    voices: []
  }),
  mounted() {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.cancel();
      this.voices = window.speechSynthesis.getVoices();
    };
  },
  computed: {},
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
      if (!msg.voice) {
        if (this.voices) {
          msg.voice = this.voices.filter(function(voice) {
            return voice.name == "Google हिन्दी";
          })[0];
        }
      }
      // Queue this utterance.
      window.speechSynthesis.speak(msg);
    },
    loadExcerSize() {
      // const slideDelay = 1350;
      const dynamicSlider = document.getElementById("slider");

      //Switch to Fullscreen mode
      if (dynamicSlider.requestFullscreen) {
        dynamicSlider.requestFullscreen();
      } else if (dynamicSlider.webkitRequestFullscreen) {
        /* Safari */
        dynamicSlider.webkitRequestFullscreen();
      } else if (dynamicSlider.msRequestFullscreen) {
        /* IE11 */
        dynamicSlider.msRequestFullscreen();
      }
      this.slideShow(dynamicSlider, 0);
    }

    // slideShow(dynamicSlider, curSlide) {
    //   window.speechSynthesis.cancel();
    //   if (curSlide === dynamicSlider.childElementCount) {
    //     window.location.reload();
    //   } else {
    //     var thisSlide = document.getElementById(curSlide).getAttribute("value");
    //   }
    //   if (thisSlide) {
    //     msg.text = thisSlide;
    //     if (voices) {
    //       msg.voice = voices.filter(function(voice) {
    //         return voice.name == "Google हिन्दी";
    //       })[0];
    //     }
    //     window.speechSynthesis.speak(msg);
    //     msg.onend = function(event) {
    //       curSlide++;
    //       dynamicSlider.firstElementChild.style.setProperty(
    //         "margin-left",
    //         "-" + curSlide + "00%"
    //       );
    //       slideShow(dynamicSlider, curSlide);
    //     };
    //   }
    // }
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

