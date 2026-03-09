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

    createPlaceMarks().forEach((placemark: any) => {
      map.geoObjects.add(placemark)
    })
    map.geoObjects.add(new window.ymaps.Placemark([55.751244, 37.618423]))
  })
})
</script>

<template>
  <div>
    <div ref="mapEl" class="ya-map" />
    <div class="toggle-button">Посмотреть на карте</div>
  </div>
</template>

<style lang="scss" scoped>
.ya-map {
  width: 100%;
  height: 200px;
  min-width: 0;
  min-height: 0;
}

.toggle-button {
  color: var(--color-blue-secondary);
  cursor: pointer;
  text-align: center;
  user-select: none;
}
</style>
