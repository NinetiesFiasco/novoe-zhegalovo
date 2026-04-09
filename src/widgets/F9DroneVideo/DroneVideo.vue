<script lang="ts" setup></script>

<template>
  <div class="video-container">
    <video controls autoplay muted loop>
      <source src="/video/drone-video.webm" type="video/webm" />
      <source src="/video/drone-video.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  width: 100%;
  height: 100%;

  & video {
    width: 100%;
    height: 100%;
    margin: auto;
  }
}
</style>
