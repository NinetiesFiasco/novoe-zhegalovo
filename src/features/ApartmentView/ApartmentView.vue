<script lang="ts" setup>
import { useSectionsStore } from "~/entities"
import { PictureViewer } from "~/shared/ui"

const FINISHED_INTERIOR_PRICE = 150000

const isPictures = ref<boolean>(false)

const sectionsStore = useSectionsStore()

const { currentFlat } = storeToRefs(sectionsStore)

const isFinished = computed(() => {
  return (currentFlat.value?.priceMeter ?? 0) > FINISHED_INTERIOR_PRICE
})

const finishedPictures = [
  "/images/interior/finished/1.jpg",
  "/images/interior/finished/2.jpg",
  "/images/interior/finished/3.jpg",
  "/images/interior/finished/4.jpg",
  "/images/interior/finished/5.jpg",
  "/images/interior/finished/6.jpg",
  "/images/interior/finished/7.jpg",
  "/images/interior/finished/8.jpg",
  "/images/interior/finished/9.jpg",
  "/images/interior/finished/10.jpg",
  "/images/interior/finished/11.jpg",
  "/images/interior/finished/12.jpg",
  "/images/interior/finished/13.jpg",
]
const preFinishedPictures = [
  "/images/interior/prefinished/1.jpg",
  "/images/interior/prefinished/2.jpg",
  "/images/interior/prefinished/3.jpg",
  "/images/interior/prefinished/4.jpg",
  "/images/interior/prefinished/5.jpg",
  "/images/interior/prefinished/6.jpg",
  "/images/interior/prefinished/7.jpg",
  "/images/interior/prefinished/8.jpg",
  "/images/interior/prefinished/9.jpg",
]
</script>

<template>
  <div v-if="currentFlat" class="apartment-container">
    <h3 class="font-default">{{ currentFlat.rooms }}-комнатная квартира</h3>
    <div class="floor-plan">
      <img
        class="img-plan"
        :src="`/images/floor-plan/${currentFlat.plan}.jpg`"
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
      <p @click="isPictures = true">
        {{ isFinished ? "Пример чистовой отделки" : "Пример черновой отделки" }}
      </p>
      <PictureViewer
        v-if="isPictures"
        @close="isPictures = false"
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
}
</style>
