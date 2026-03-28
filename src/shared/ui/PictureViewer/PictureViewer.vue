<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"

import { Navigation, Pagination } from "swiper/modules"

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
  <div class="picture-viewer">
    <ClientOnly>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
      >
        <swiper-slide v-for="picture in props.pictures" :key="picture">
          <div class="slide">
            <img :src="`${props.url}${picture}`" />
          </div>
        </swiper-slide>
      </swiper>
    </ClientOnly>
    <div class="close" @click="close"></div>
  </div>
</template>

<style lang="scss" scoped>
.picture-viewer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;

  & .close {
    @include bg-picture;
    background-image: url("/icons/close.svg");
    color: var(--color-grey-accent);
    position: absolute;
    right: 20px;
    top: 20px;
    width: 100px;
    height: 100px;
    color: black;
    font-size: 50px;
    cursor: pointer;
    z-index: 1000;
  }

  & .slide {
    height: calc(100dvh - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 24px;
  }
}
</style>
