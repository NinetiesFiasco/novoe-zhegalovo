<script lang="ts" setup>
import { ref } from "vue"
import { createYaMapObjects } from "./ymaps"

const mapEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  const yaMapPromise = (window as any)._yandexMapsPromise
  if (!yaMapPromise) return
  await yaMapPromise

  window.ymaps.ready(() => {
    const map = new window.ymaps.Map(mapEl.value, {
      center: [55.83, 37.8],
      zoom: 11,
      controls: ["fullscreenControl"],
    })
    map.behaviors.disable("scrollZoom")

    createYaMapObjects().forEach((yaMapObject: any) => {
      map.geoObjects.add(yaMapObject)
    })

    // map.geoObjects.add(new window.ymaps.Placemark([55.751244, 37.618423]))
  })
})
</script>

<template>
  <div ref="mapEl" class="ya-map" />
</template>

<style lang="scss" scoped>
.ya-map {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: 200px;
  overflow: hidden;
}
</style>
