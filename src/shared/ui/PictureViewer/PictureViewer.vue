<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"

import { Navigation, Pagination } from "swiper/modules"

const { isMobile } = useDevice()

const modules = [Navigation, Pagination]

type Props = {
  title?: string
  url: string
  pictures: Array<string>
}

const emit = defineEmits<{
  (e: "close"): void
}>()

const close = () => {
  emit("close")
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="{
      'picture-viewer': true,
      'picture-viewer-mobile': isMobile,
    }"
  >
    <div class="background" @click="close" />

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="{
        prevEl: '.prev-el',
        nextEl: '.next-el',
      }"
    >
      <swiper-slide v-for="picture in props.pictures" :key="picture">
        <div class="slide">
          <img :src="`${props.url}${picture}`" />
        </div>
      </swiper-slide>

      <div class="next-el nav-button">
        <div class="arrow arrow-right"></div>
      </div>
      <div class="prev-el nav-button"><div class="arrow arrow-left"></div></div>
      <div class="close" @click="close">X</div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.picture-viewer {
  position: fixed;
  inset: 0;
  user-select: none;

  & .background {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  & .close {
    position: absolute;
    font-size: 100px;
    top: 0px;
    line-height: 100%;
    right: 190px;
    height: 50px;
    width: 50px;
    color: var(--color-grey);
    z-index: 11000;
    user-select: none;
    cursor: pointer;
  }

  & .slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 24px;

    & > img {
      object-fit: cover;
    }
  }

  .swiper {
    border-radius: var(--radius-swiper);
    margin: 50px 100px;
    height: calc(100% - 100px);
    z-index: 100;
  }
  .nav-button {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 100;
    width: 150px;
    cursor: pointer;
    background-color: var(--color-grey);
  }
  .next-el {
    right: 0;
  }
  .prev-el {
    left: 0;
  }
  .arrow {
    background: url("/icons/arrow.svg") center center / cover no-repeat;
    width: 30px;
    height: 50px;
    z-index: 200;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 15px);
  }
  .arrow-left {
    transform: rotate(180deg);
  }
}

.picture-viewer-mobile {
  .swiper {
    border-radius: 0;
    margin: 0;
    height: 100%;
  }
  .nav-button {
    display: none;
  }
  .close {
    top: 10px;
    right: 20px;
  }
}
</style>
