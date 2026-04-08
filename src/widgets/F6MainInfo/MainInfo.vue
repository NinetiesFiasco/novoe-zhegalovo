<script lang="ts" setup>
import { AboutInfrastructure, InfoEnvironment, InfoTransport } from "./ui"

import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"
const modules = [Navigation, Pagination]

const { isMobile } = useDevice()
</script>
<template>
  <div class="main-info">
    <swiper
      class="info-swiper"
      :modules="modules"
      :slides-per-view="isMobile ? 1 : 3"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
    >
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
<style lang="scss">
.info-swiper {
  & .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    caret-color: transparent;
  }
  & .swiper-pagination-bullet-active {
    width: 25px;
    height: 25px;
  }
  & .swiper-slide {
    padding-bottom: 50px;
    height: 600px;
    width: 600px;
  }
}
</style>
