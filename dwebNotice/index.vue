<template>
  <div class="dweb-notice">
    <span class="span">
      {{ notice_text }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "DwebNotice",
};
</script>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import anime from "animejs";
const props = defineProps(["text", "time"]);
let notice_text = props.text;
let scroll_time = props.time;

onMounted(() => {
  //屏幕宽度
  let screenWidth = document.documentElement.clientWidth;
  console.log(screenWidth);
  let span_dom = document
    .getElementsByClassName("dweb-notice")[0]
    .getElementsByTagName("span")[0];
  //span文本宽度
  let span_width = span_dom.offsetWidth;
  span_dom.style.left = screenWidth + "px";
  //span_dom左移动
  anime({
    targets: span_dom,
    left: -span_width,
    duration: scroll_time,
    easing: "linear",
    loop: true,
    autoplay: true,
  });
});
</script>

<style>
.dweb-notice span {
  position: absolute;
  height: 16px;
  word-break: keep-all;
  font-size: 16px;
  line-height: 16px;
  white-space: nowrap;
}
.dweb-notice {
  position: relative;
  width: 100%;
  height: 16px;
  text-align: left;
  color: #89919c;
  overflow-x: scroll;
  scrollbar-width: none;
}

.dweb-notice::-webkit-scrollbar {
  display: none;
}
</style>
