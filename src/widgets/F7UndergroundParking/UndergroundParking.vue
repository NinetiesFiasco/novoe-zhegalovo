<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"
import { NavigationButtons } from "./ui"
import { GetCall } from "~/features"

const isModalCallOpened = ref<boolean>(false)

//const { isMobile } = useDevice()
const pictures = Array.from({ length: 3 }, (_, i) => `${i + 1}.webp`)
const modules = [Navigation, Pagination]
</script>

<template>
  <div class="underground-parking">
    <div class="nav-container">
      <NavigationButtons />
    </div>
    <h2>Подземная парковка</h2>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="{
        nextEl: '.parking-next',
        prevEl: '.parking-prev',
      }"
    >
      <swiper-slide v-for="picture in pictures" :key="picture">
        <div class="slide">
          <img :src="`/images/parking/${picture}`" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="get-call">
      <GetCall
        :is-open="isModalCallOpened"
        @toggle="isModalCallOpened = !isModalCallOpened"
        status="Забронировать парковку"
      >
        <span class="order-place">Забронировать место</span>
      </GetCall>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.underground-parking {
  width: 100%;
  margin: auto;
  max-width: 1600px;
  position: relative;

  & .nav-container {
    position: absolute;
    height: 50px;
    right: 200px;
    top: 70px;
  }
  & > h2 {
    margin: 40px 0;
  }

  & .slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 24px;

    & > img {
      object-fit: contain;
      height: 100%;
    }
  }

  .swiper {
    border-radius: var(--radius-swiper);
    margin: 50px 0;
    height: calc(100% - 100px);
    z-index: 100;
  }

  & > .get-call {
    width: 450px;
    position: absolute;
    bottom: 50px;
    left: 100px;
    z-index: 1000;

    & .order-place {
      font-size: 30px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 900px) {
    .swiper {
      border-radius: 24px;
      margin: auto;
      height: calc(100% - 100px);
      z-index: 100;
    }
    & > .get-call {
      bottom: 15px;
      left: 15px;
    }
  }
}
</style>
