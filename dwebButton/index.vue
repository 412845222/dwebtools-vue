<template>
  <div
    @touchstart="touchStart"
    @touchend="touchEnd"
    @mousedown="touchStart"
    @mouseup="touchEnd"
    :class="'dweb-button shadow' + bgClass"
    :style="'opacity:' + opacity"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "DwebButton",
};
</script>

<script setup name="DwebButton" lang="ts">
import { ref } from "@vue/reactivity";

const props = defineProps(["text", "bgColor"]);
const text = props.text;
const bgColor = props.bgColor;
const bgClass = ref("");
const opacity = ref(1);
if (bgColor) {
  bgClass.value = " " + bgColor;
} else {
  bgClass.value = " default";
}

//点击变色
function touchStart() {
  opacity.value = 0.5;
}
function touchEnd() {
  opacity.value = 1;
}
</script>

<style scoped>
.dweb-button {
  padding: 5px 15px;
  border-radius: 5px;
}
.linear {
  background: linear-gradient(45deg, #236599, #7d5259);
}
.default {
  background: #236599;
}
.xbone {
  background: linear-gradient(90deg, #d851ba, #4498bc);
}
.dweb-button span {
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
}
</style>
