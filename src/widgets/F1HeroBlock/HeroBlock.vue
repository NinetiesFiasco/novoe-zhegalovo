<script lang="ts" setup>
import { CompanyPhone, CompanyLogo, BackgroundWithSelection } from "./ui"
import { MainMenu, GoToFlats } from "~/features"

const { isMobile } = useDevice()

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
    <BackgroundWithSelection :isMobile="isMobile" @img-loaded="imgLoaded" />
    <CompanyLogo :isLoaded="isLoaded" />
    <template v-if="isUI">
      <MainMenu />
      <CompanyPhone />
    </template>
    <template v-if="isMobile">
      <GoToFlats />
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
