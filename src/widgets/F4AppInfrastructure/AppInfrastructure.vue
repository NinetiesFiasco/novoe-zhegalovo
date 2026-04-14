<script lang="ts" setup>
import { BackgroundWithMarks } from "./ui"
</script>

<template>
  <div id="app-infrastructure" class="gen-plan spy-section">
    <h2>Инфраструктура</h2>
    <BackgroundWithMarks />
  </div>
</template>

<style scoped lang="scss">
.gen-plan {
  width: inherit;
  height: inherit;
  position: relative;
  max-width: 1600px;
  margin: auto;

  & > h2 {
    padding-bottom: 40px;
  }

  & .selector {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
  }

  & .selector {
    bottom: 40%;
    right: 23%;
  }
}
</style>
