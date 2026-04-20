<script lang="ts" setup>
import MenuMobile from "./MenuMobile.vue"
import MenuDesktop from "./MenuDesktop.vue"
const isMounted = ref<boolean>(false)
const { isMobile } = useDevice()
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <template v-if="isMounted">
    <template v-if="isMobile">
      <MenuMobile />
    </template>
    <template v-else>
      <MenuDesktop />
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
