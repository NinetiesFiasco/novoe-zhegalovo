<script lang="ts" setup>
import { ref } from "vue"
import { createYaMapObjects } from "./ymaps"
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
    return 11
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

    // map.geoObjects.add(new window.ymaps.Placemark([55.751244, 37.618423]))
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
    <div class="left-info">
      <img
        class="pedestrian"
        src="/icons/pedestrian.svg"
        alt="Иконка пешехода"
      />
      <p>15 минут пешком до Ж/Д станции Воронок</p>
      <img class="train" src="/icons/train.svg" alt="Иконка поезда" />
      <p>До Ярославского вокзала можно проехать за 40 минут на электропоезде</p>
    </div>

    <div ref="mapEl" class="ya-map" />

    <div class="right-info">
      <img
        class="pedestrian"
        src="/icons/pedestrian.svg"
        alt="Иконка пешехода"
      />
      <p>До автобусной остановки 5 минут пешком</p>
      <img class="bus" src="/icons/bus.svg" alt="Иконка поезда" />
      <p>Автобус едет 20 минут до станции метро Щёлковская</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  height: 100%;

  & .left-info {
    grid-area: left;
    width: 150px;
    text-align: center;
    padding: 10px;
    & > img {
      margin: 40px auto 10px auto;
    }
  }
  & .ya-map {
    grid-area: map;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    border-radius: 200px;
    overflow: hidden;
  }
  & .right-info {
    grid-area: right;
    width: 150px;
    text-align: center;
    padding: 10px;
    & > img {
      margin: 40px auto 10px auto;
    }
  }
}
.map-container-desktop {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
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

  & .left-info {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 10px;
    & > img {
      margin: 0;
      width: 40px;
    }
    & > .pedestrian {
      width: 25px;
    }
    & > p {
      font-size: 12px;
    }
  }

  & .ya-map {
    grid-area: map;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 100px;
    border-radius: 200px;
    overflow: hidden;
  }

  & .right-info {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    & > .pedestrian {
      width: 25px;
    }
    & > .bus {
      width: 55px;
    }
    & > img {
      margin: 0;
      width: 40px;
    }
    & > p {
      font-size: 12px;
    }
  }
}
</style>
