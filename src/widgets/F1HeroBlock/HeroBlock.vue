<script lang="ts" setup>
import { CompanyPhone, CompanyLogo, BackgroundWithSelection } from "./ui"
import { MainMenu } from "~/features"

const isUI = ref(false)
const isLoaded = ref<boolean>(false)

const imgLoaded = () => {
  isLoaded.value = true
  window.setTimeout(() => {
    isUI.value = true
  }, 500)
}
</script>

<template>
  <div class="hero-block">
    <BackgroundWithSelection @img-loaded="imgLoaded" />
    <CompanyLogo :isLoaded="isLoaded" />
    <template v-if="isUI">
      <MainMenu />
      <CompanyPhone />
    </template>
  </div>
</template>

<style scoped lang="scss">
.hero-block {
  width: inherit;
  height: inherit;
  position: relative;
}
</style>
