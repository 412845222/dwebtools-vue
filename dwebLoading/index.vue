<template>
  <div v-if="loadShow" id="loading">
    <div id="loadingBg">
      <div id="bar"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DwebLoading",
};
</script>

<script setup name="DwebLoading" lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";
import anime from "animejs"; //引入animejs
const props = defineProps(["loadLength"]);
const loadShow = ref(true);
onMounted(() => {
  cloadLoading(props.loadLength);
});
watch([props], (val) => {
  if (val) {
    cloadLoading(val[0].loadLength);
  }
});

function cloadLoading(number: number) {
  if (number == 0) {
    console.log("加载完毕");
    anime({
      targets: "#loadingBg",
      height: "0vh",
      easing: "easeInOutBack",
      duration: 800,
      complete: () => {
        anime({
          targets: "#bar",
          opacity: 0,
          easing: "easeInOutExpo",
          duration: 300,
          complete: () => {
            loadShow.value = false;
          },
        });
      },
    });
  }
}
</script>

<style scoped>
#loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loadingBg {
  width: 100vw;
  height: 100vh;
  background-color: #000000ee;
  display: flex;
  justify-content: center;
  align-items: center;
}
#bar {
  width: 100vw;
  height: 10px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: auto;
  background-size: 400%;
  line-height: 100px;
  position: absolute;
  z-index: 1001;
}
#bar::before {
  content: "";
  width: 100vw;
  height: 10px;
  position: absolute;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  filter: blur(20px);
  z-index: 999;
}
#bar::before,
#bar {
  animation: sun 1s infinite;
}
@keyframes sun {
  100% {
    background-position: -400% 0;
  }
}
</style>

function anime(arg0: { targets: string; translateX: number; }) { throw new Error("Function
not implemented."); }
