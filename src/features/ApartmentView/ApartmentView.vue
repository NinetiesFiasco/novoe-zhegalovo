<script lang="ts" setup>
import { useSectionsStore } from "~/entities"

const sectionsStore = useSectionsStore()

const { currentFlat } = storeToRefs(sectionsStore)
</script>

<template>
  <div v-if="currentFlat" class="apartment-container">
    <h3>{{ currentFlat.rooms }}-комнатная квартира</h3>
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
            {{ currentFlat.priceMeter > 150000 ? "чистовая" : "черновая" }}
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
      <h4>Дополнительные характеристики</h4>
      <p>
        {{
          currentFlat.priceMeter > 150000
            ? "Пример чистовой отделки"
            : "Пример черновой отделки"
        }}
      </p>
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
  }

  & .params {
    border-spacing: 40px;
    & th {
      color: var(--color-blue);
    }
  }

  & .additional-features {
    & > h4 {
      display: inline-flex;
      position: relative;
      color: var(--color-blue);
      margin-bottom: 10px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background: var(--color-blue);
        filter: blur(3px);
      }
    }
  }
}
</style>
