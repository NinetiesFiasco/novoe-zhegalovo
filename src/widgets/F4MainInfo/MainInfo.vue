<script lang="ts" setup>
import {
  AboutInfrastructure,
  // AppMap,
  InfoEnvironment,
  InfoTransport,
  YandexMap,
} from "./ui"

import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"
const modules = [Navigation, Pagination]

const SwiperStyle = computed(() => ({
  height: "100%",
}))
</script>
<template>
  <div class="main-info">
    <swiper
      class="info-swiper"
      :style="SwiperStyle"
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
    >
      <swiper-slide> <YandexMap /> </swiper-slide>
      <!-- <swiper-slide> <AppMap /> </swiper-slide> -->
      <swiper-slide> <InfoTransport /> </swiper-slide>
      <swiper-slide> <AboutInfrastructure /> </swiper-slide>
      <swiper-slide> <InfoEnvironment /> </swiper-slide>
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
.main-info {
  width: 100%;
  height: 100%;
}
</style>
<style>
.info-swiper .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  caret-color: transparent;
}
.info-swiper .swiper-pagination-bullet-active {
  width: 25px;
  height: 25px;
}
.swiper-slide {
  padding-bottom: 50px;
}
</style>
