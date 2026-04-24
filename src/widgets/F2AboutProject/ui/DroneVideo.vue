<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(["update:modelValue"])

const videoRef = ref<HTMLVideoElement | null>(null)

const close = () => {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
  emit("update:modelValue", false)
}

// закрытие по ESC
const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") close()
}

onMounted(() => {
  window.addEventListener("keydown", onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="overlay" @click.self="close">
      <div class="overlay__content">
        <button class="overlay__close" @click="close">✕</button>

        <video ref="videoRef" class="overlay__video" controls autoplay muted>
          <source src="/video/drone-video.webm" type="video/webm" />
          <source src="/video/drone-video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  </Teleport>

  <div class="video-container">
    <video controls autoplay muted loop></video>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(4px);
}

.overlay__content {
  position: relative;
  width: min(90%, 900px);
}

.overlay__video {
  width: 100%;
  border-radius: 12px;
  display: block;
}

.overlay__close {
  position: absolute;
  top: -40px;
  right: 0;

  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}
</style>
