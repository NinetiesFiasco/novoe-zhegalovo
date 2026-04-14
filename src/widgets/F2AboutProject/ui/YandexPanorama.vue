<template>
  <button @click="openPanorama">Панорама 360</button>

  <Teleport to="body">
    <div v-if="isOpen" class="overlay">
      <div class="overlay__content">
        <button class="close" @click="close">✕</button>
        <div ref="panoContainer" class="pano"></div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue"

const isOpen = ref(false)
const panoContainer = ref<HTMLDivElement | null>(null)

const coords: [number, number] = [55.907205, 37.982487]

let player: any = null

const openPanorama = async () => {
  const yaMapPromise = (window as any)._yandexMapsPromise
  if (!yaMapPromise) return
  await yaMapPromise
  isOpen.value = true

  await nextTick()

  window.ymaps.ready(() => {
    window.ymaps.panorama.locate(coords).done((panoramas: any[]) => {
      if (panoramas.length > 0 && panoContainer.value) {
        player = new window.ymaps.panorama.Player(
          panoContainer.value,
          panoramas[0],
          {
            direction: [250, 15],
            controls: ["zoomControl", "fullscreenControl"],
          },
        )
      }
    })
  })
}

const close = () => {
  if (player) {
    player.destroy()
    player = null
  }
  isOpen.value = false
}
</script>

<style>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay__content {
  width: 90%;
  height: 80%;
  position: relative;
}

.pano {
  width: 100%;
  height: 100%;
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 24px;
  background: none;
  border: none;
}
</style>
