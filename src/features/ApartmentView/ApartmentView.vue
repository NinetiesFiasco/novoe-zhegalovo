<script lang="ts" setup>
import { useSectionsStore } from "~/entities"
import { PictureViewer } from "~/shared/ui"
import { getBaseURL } from "~/shared/utils"
import { PrimaryButton } from "~/shared/ui"

const baseURL = getBaseURL()

const FINISHED_INTERIOR_PRICE = 150000

const isPictures = ref<boolean>(false)

const sectionsStore = useSectionsStore()

const { currentFlat } = storeToRefs(sectionsStore)

const isFinished = computed(() => {
  return (currentFlat.value?.priceMeter ?? 0) > FINISHED_INTERIOR_PRICE
})

const finishedPictures = [
  `1.jpg`,
  `2.jpg`,
  `3.jpg`,
  `4.jpg`,
  `5.jpg`,
  `6.jpg`,
  `7.jpg`,
  `8.jpg`,
  `9.jpg`,
  `10.jpg`,
  `11.jpg`,
  `12.jpg`,
  `13.jpg`,
]
const preFinishedPictures = [
  `1.jpg`,
  `2.jpg`,
  `3.jpg`,
  `4.jpg`,
  `5.jpg`,
  `6.jpg`,
  `7.jpg`,
  `8.jpg`,
  `9.jpg`,
]
</script>

<template>
  <div v-if="currentFlat" class="apartment-container">
    <h3 class="font-default">{{ currentFlat.rooms }}-комнатная квартира</h3>
    <div class="floor-plan">
      <img
        class="img-plan"
        :src="`${baseURL}images/floor-plan/${currentFlat.plan}.jpg`"
        :alt="`Планировка квартиры ${currentFlat.number}`"
      />
    </div>
    <table class="params">
      <thead>
        <tr>
          <th>Площадь</th>
          <th>Подъезд</th>
          <th>Этаж</th>
          <th>Вид отделки</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ currentFlat.totalArea }} м<sup>2</sup></td>
          <td>{{ sectionsStore.currentSection }}</td>
          <td>{{ sectionsStore.currentFloor }}</td>
          <td>
            {{ isFinished ? "чистовая" : "черновая" }}
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <h4>Цена: {{ currentFlat.priceTotal }} ₽</h4>
      <p>Цена за метр: {{ currentFlat.priceMeter }} ₽ за м<sup>2</sup></p>
    </div>
    <hr />
    <div class="additional-features">
      <PrimaryButton @click="isPictures = true">{{
        isFinished ? "Пример чистовой отделки" : "Пример черновой отделки"
      }}</PrimaryButton>
      <PictureViewer
        v-if="isPictures"
        @close="isPictures = false"
        :title="
          isFinished ? 'Пример чистовой отделки' : 'Пример черновой отделки'
        "
        :url="
          isFinished
            ? `${baseURL}images/interior/finished/`
            : `${baseURL}images/interior/prefinished/`
        "
        :pictures="isFinished ? finishedPictures : preFinishedPictures"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apartment-container {
  padding: 20px;
  border: 2px solid var(--color-grey-bright);
  border-radius: var(--radius-md);

  & .img-plan {
    height: 300px;
  }

  & > h3 {
    color: var(--color-blue);
    font-size: 25px;
    margin-top: 25px;
  }

  & .params {
    border-spacing: 50px 15px;
    & th {
      color: var(--color-blue);
    }
  }

  & .additional-features {
    margin-top: 15px;
  }
}
</style>
