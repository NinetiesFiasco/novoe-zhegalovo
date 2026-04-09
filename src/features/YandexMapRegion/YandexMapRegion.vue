<script lang="ts" setup>
import { ref } from "vue"
import { createYaMapObjects } from "./ymaps"
import { MapInfographic } from "./ui"
const { isMobile } = useDevice()

const mapEl = ref<HTMLElement | null>(null)

let updateZoom: () => void

onMounted(async () => {
  const yaMapPromise = (window as any)._yandexMapsPromise
  if (!yaMapPromise) return
  await yaMapPromise

  const getZoom = () => {
    if (isMobile.value) return 9
    if (window.innerWidth < 1200) return 10
    if (window.innerWidth < 1800) return 11
    return 12
  }

  window.ymaps.ready(() => {
    let cachedZoom = getZoom()
    const map = new window.ymaps.Map(mapEl.value, {
      center: [55.85, 37.85],
      zoom: getZoom(),
      controls: [],
    })
    map.behaviors.disable(["scrollZoom", "drag", "dblClickZoom", "multiTouch"])

    createYaMapObjects(cachedZoom).forEach((yaMapObject: any) => {
      map.geoObjects.add(yaMapObject)
    })

    updateZoom = () => {
      const zoom = getZoom()
      if (cachedZoom !== zoom) {
        map.geoObjects.removeAll()
        createYaMapObjects(zoom).forEach((yaMapObject: any) => {
          map.geoObjects.add(yaMapObject)
        })
        cachedZoom = zoom
      }
      map.setZoom(zoom)
    }

    window.addEventListener("resize", updateZoom)
  })
})

onUnmounted(() => {
  window.removeEventListener("resize", updateZoom)
})
</script>

<template>
  <div
    :class="{
      'map-container': true,
      'map-container-mobile': isMobile,
      'map-container-desktop': !isMobile,
    }"
  >
    <MapInfographic />
    <div ref="mapEl" class="ya-map" />
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  height: 100%;
  width: 100%;

  & .ya-map {
    grid-area: map;
    width: 100%;
    height: 100%;
    min-width: 600px;
    min-height: 0;
    border-radius: 20px;
    overflow: hidden;
  }
}
.map-container-desktop {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas: "left map right";
}
.map-container-mobile {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100px 100px;
  grid-template-areas:
    "map"
    "left"
    "right";

  & .ya-map {
    grid-area: map;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 100px;
    border-radius: 50px;
    overflow: hidden;
  }
}
</style>
