<script lang="ts" setup>
import MenuMobile from "./MenuMobile.vue"
import MenuDesktop from "./MenuDesktop.vue"
const { isMobile } = useDevice()
</script>

<template>
  <template v-if="isMobile">
    <MenuMobile />
  </template>
  <template v-else>
    <MenuDesktop />
  </template>
</template>

<style lang="scss" scoped></style>
