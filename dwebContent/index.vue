<template>
  <div class="dweb-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "DwebContent",
};
</script>

<script setup lang="ts"></script>

<style scoped>
.dweb-content {
  position: relative;
  width: 50%;
  height: calc(100vh - 76px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 6px #4c95bc80;
  overflow: hidden;
}
</style>
