<script lang="ts" setup>
import { ref } from "vue"
import { createYaMapObjects } from "./ymaps"
import { MapInfographic } from "./ui"

const mapEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  const yaMapPromise = (window as any)._yandexMapsPromise
  if (!yaMapPromise) return
  await yaMapPromise

  window.ymaps.ready(() => {
    const map = new window.ymaps.Map(mapEl.value, {
      controls: [],
      center: [55, 37],
    })

    map.setBounds(
      [
        // [55.7, 37.6], // юго-запад
        [55.762633, 37.634771],
        [55.933475, 38.029556],
        // [56, 37.9], // северо-восток
      ],
      {
        duration: 0,
        checkZoomRange: false,
        zoomMargin: 20,
      },
    )

    map.behaviors.disable(["scrollZoom", "drag", "dblClickZoom", "multiTouch"])

    createYaMapObjects().forEach((yaMapObject: any) => {
      map.geoObjects.add(yaMapObject)
    })
  })
})
</script>

<template>
  <div class="map-container">
    <div ref="mapEl" class="ya-map" />
    <MapInfographic />
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  display: flex;

  & .ya-map {
    width: 100%;
    height: 100%;
    min-width: 600px;
    min-height: 600px;
    border-radius: 20px;
    overflow: hidden;
  }
}
</style>
