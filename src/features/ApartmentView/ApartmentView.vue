<script lang="ts" setup>
import { useSectionsStore } from "~/entities"
import { getBaseURL } from "~/shared/utils"
import { ApartmentFinishing, UndergroundParking } from "./ui"

const baseURL = getBaseURL()

const sectionsStore = useSectionsStore()

const { currentFlat } = storeToRefs(sectionsStore)
</script>

<template>
  <div v-if="currentFlat" class="apartment-container">
    <h3 class="font-default">{{ currentFlat.rooms }}-комнатная квартира</h3>
    <div class="floor-plan">
      <img
        class="img-plan"
        :src="`${baseURL}images/floor-plan/${currentFlat.plan}.webp`"
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
            {{ sectionsStore.isFinished ? "чистовая" : "черновая" }}
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
      <ApartmentFinishing />
      <UndergroundParking />
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
