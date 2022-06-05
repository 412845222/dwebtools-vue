<template>
  <div class="container">
    <div class="dweb-menu row shadow">
      <div class="col-3">
        <img class="logo shadow" src="../assets/img/xstoryLogo.png" alt="" />
      </div>
      <div class="col col-lg-2 flex-xy-center">
        <dwebButton :text="'开始创作'" :bgColor="'linear'"></dwebButton>
      </div>
      <div class="col col-lg-2 flex-xy-center">
        <dwebButton :text="'Xbone动画'" :bgColor="'xbone'"></dwebButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DwebTopMenu",
};
</script>

<script setup lang="ts">
// import dwebButton from "../components/dwebButton.vue";
</script>

<style scoped>
.dweb-menu {
  height: 60px;
  background: linear-gradient(45deg, #272f39, #3a3c49);
  border-radius: 0 0 20px 20px;
}
.logo {
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 6px;
}
.logo.shadow {
  box-shadow: 0 0 6px #38a8b4 !important;
}
</style>
