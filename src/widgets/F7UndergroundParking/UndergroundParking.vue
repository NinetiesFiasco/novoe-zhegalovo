<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"

//const { isMobile } = useDevice()
const pictures = Array.from({ length: 3 }, (_, i) => `${i + 1}.webp`)
const modules = [Navigation, Pagination]
</script>

<template>
  <div class="underground-parking">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="picture in pictures" :key="picture">
        <div class="slide">
          <img :src="`/images/parking/${picture}`" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.underground-parking {
  width: 100%;

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
    margin: 50px 100px;
    height: calc(100% - 100px);
    z-index: 100;
  }
}
</style>
