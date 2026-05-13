<script lang="ts" setup>
import { useMetrika } from "./app/composables"
const { initMetrika, hit } = useMetrika()

initMetrika()

const router = useRouter()

onMounted(() => {
  router.afterEach((to) => {
    hit(to.fullPath)
  })
})
</script>

<template>
  <NuxtPage />
</template>

<style>
@import "swiper/css";
@import "swiper/css/navigation";
@import "swiper/css/pagination";
</style>
