<script lang="ts" setup>
import {
  BackgroundWithSelection,
  DroneVideo,
  YandexPanorama,
  YandexMap,
} from "./ui"
const isVideo = ref<boolean>(false)
const toggle = () => {
  isVideo.value = !isVideo.value
}
</script>

<template>
  <div class="about-project">
    <h2 class="about-title">О проекте</h2>
    <BackgroundWithSelection />
    <div class="about-buttons">
      <button class="btn-video" @click="toggle">Видео комплекса</button>
      <YandexPanorama />
      <YandexMap />
    </div>
    <DroneVideo v-if="isVideo" v-model="isVideo" />
    <!-- <button @click="openYandexPanorama">Панорама из яндекса</button> -->
  </div>
</template>

<style scoped lang="scss">
.about-project {
  width: inherit;
  height: inherit;
  position: relative;
  max-width: 1600px;
  margin: auto;

  & .about-title {
    font-weight: 600;
    margin-bottom: 20px;
  }

  & .about-buttons {
    position: absolute;
    bottom: 50px;
    left: 50px;

    & > * {
      padding: 12px 18px;
      border-radius: 999px;
      font-size: 24px;
      cursor: pointer;
      border: none;
      transition: 0.3s;
      margin-left: 20px;
    }
    & .btn-video {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      color: #fff;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }

  @media screen and (max-width: 900px) {
    & .about-buttons {
      bottom: 15px;
      left: 0;
      display: flex;
      justify-content: space-around;
      width: 100%;

      & > * {
        padding: 6px 6px;
        border-radius: 999px;
        font-size: 18px;
        cursor: pointer;
        border: none;
        transition: 0.3s;
      }
      & .btn-video {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: #fff;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    & .about-buttons {
      & > * {
        padding: 3px 6px;
        font-size: 12px;
      }
    }
  }
}
</style>
