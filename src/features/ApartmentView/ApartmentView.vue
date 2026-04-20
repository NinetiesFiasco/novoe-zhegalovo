<script lang="ts" setup>
import { useSectionsStore } from "~/entities"
import { ApartmentFinishing } from "./ui"

const sectionsStore = useSectionsStore()

const { currentFlat } = storeToRefs(sectionsStore)
</script>

<template>
  <div v-if="currentFlat" class="apartment-container">
    <h3 class="font-default">{{ currentFlat.rooms }}-комнатная квартира</h3>
    <div class="floor-plan">
      <img
        class="img-plan"
        :src="`images/floor-plan/${currentFlat.plan}.webp`"
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
    <div class="prices">
      <h4 class="price-total">
        Цена: <strong>{{ currentFlat.priceTotal }}</strong> ₽
      </h4>
      <p>
        Цена за метр: <strong>{{ currentFlat.priceMeter }}</strong> ₽ за м
        <sup>2</sup>
      </p>
    </div>
    <hr />
    <div class="additional-features">
      <ApartmentFinishing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apartment-container {
  padding: 20px;
  border: 2px solid var(--color-grey-bright);
  border-radius: var(--radius-md);

  & .img-plan {
    max-width: 600px;
    width: 100%;
    height: auto;
  }

  & > h3 {
    color: var(--color-blue);
    font-size: 25px;
    margin: 10px 0;
  }

  & .prices {
    margin: 10px 0;

    & .price-total {
      font-size: 30px;
    }
    & > p {
      font-size: 20px;
    }
  }

  & .params {
    margin: 5px 0 5px 0;
    width: 100%;
    text-align: center;
    max-width: 600px;

    & th {
      color: var(--color-blue);
      font-size: clamp(15px, 2vw, 25px);
      text-wrap: nowrap;
    }
    & td {
      font-size: clamp(15px, 2vw, 25px);
    }
  }

  & .additional-features {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;

    & > * {
      margin: 5px 0 0 5px;
    }
  }
}
</style>
