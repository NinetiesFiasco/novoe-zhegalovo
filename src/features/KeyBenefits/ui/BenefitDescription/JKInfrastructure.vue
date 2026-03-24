<script lang="ts" setup>
import { PrimaryButton, PictureViewer } from "~/shared/ui"
import { getBaseURL } from "~/shared/utils"
const baseURL = getBaseURL()

const isParkingPhoto = ref<boolean>(false)

const parkingPictures = [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`]
</script>

<template>
  <div>
    <p>
      В шаговой доступности расположены
      <a target="_blank" href="https://sch16-schel.edumsko.ru/">школа №16</a> на
      1200 мест и детские сады, что особенно важно для семей с детьми.
    </p>
    <p>
      Во дворе расположен супермаркет, аптеки в шаговой доступности, на
      территории ЖК присутствуют ПВЗ, работают службы доставки.
    </p>
    <p>
      <a href="https://www.globus.ru/stores/schyolkovo/" target="_blank">
        Гипермаркет Глобус
      </a>
      в 3км от ЖК, работает доставка.
    </p>
    <ul>
      <li>Благоустроенный двор</li>
      <li>Современные детские площадки</li>
    </ul>
    <p>
      Подземные паркинг!
      <PrimaryButton @click="isParkingPhoto = true">
        Смотреть фото
      </PrimaryButton>
      с видео наблюдением
    </p>
    <PictureViewer
      v-if="isParkingPhoto"
      @close="isParkingPhoto = false"
      :url="`${baseURL}images/parking/`"
      :pictures="parkingPictures"
    />
  </div>
</template>

<style lang="scss" scoped></style>
