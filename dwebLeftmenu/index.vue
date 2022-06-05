<template>
  <div
    class="dweb-left-menu"
    :style="{
      width: leftMenuWidth + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "DwebLeftmenu",
};
</script>

<script setup lang="ts">
import { ref } from "vue-demi";
const props = defineProps(["width"]);
const leftMenuWidth = ref(props.width);
</script>

<style>
.dweb-left-menu {
  /* height: calc(100vh - 76px); */
  height: 200px;
  position: absolute;
  /* left: 0; */
  /* right: 0; */
  top: 100px;
  background: #1b1b2380;
}
</style>
