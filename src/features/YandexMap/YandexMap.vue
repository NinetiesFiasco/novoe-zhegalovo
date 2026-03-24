<script lang="ts" setup>
import { ref } from "vue"
import { createPlaceMarks } from "./ymaps"

const mapEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  const promise = (window as any)._yandexMapsPromise
  if (!promise) return

  await promise

  const ymaps = (window as any).ymaps

  window.ymaps.ready(() => {
    const map = new window.ymaps.Map(mapEl.value, {
      center: [55.906946, 37.981561],
      zoom: 15,
      controls: ["fullscreenControl"],
    })

    map.events.add("sizechange", () => {
      map.container.fitToViewport()
    })

    const clusterer = new ymaps.Clusterer({
      preset: "islands#invertedBlueClusterIcons",
      groupByCoordinates: false,
    })

    createPlaceMarks().forEach((placemark: any) => {
      clusterer.add(placemark)
    })
    map.geoObjects.add(clusterer)

    map.geoObjects.add(new window.ymaps.Placemark([55.751244, 37.618423]))
  })
})
</script>

<template>
  <div>
    <div ref="mapEl" class="ya-map" />
  </div>
</template>

<style lang="scss" scoped>
.ya-map {
  width: 100%;
  height: 175px;
  min-width: 0;
  min-height: 0;
  border-radius: 20px;
  overflow: hidden;
}
</style>
