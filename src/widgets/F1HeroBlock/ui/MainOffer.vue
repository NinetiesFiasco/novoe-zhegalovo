<script lang="ts" setup>
import { GetCall } from "~/features"

const isModalCallOpened = ref<boolean>(false)
</script>

<template>
  <div class="main-offer">
    <h5>Готовые квартиры по семейной ипотеке от 130 000 р. за м<sup>2</sup></h5>
    <GetCall
      :is-open="isModalCallOpened"
      @toggle="isModalCallOpened = !isModalCallOpened"
      text="Получить консультацию"
      status="Получить консультацию"
    />
    <h3>Ключи в день сделки!</h3>
  </div>
</template>

<style lang="scss" scoped>
.main-offer {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: white;
  padding: 24px;
  border-radius: 20px;
  width: 100%;
}

@media screen and (max-width: 450px) {
  .main-offer {
    padding: 6px;
  }
}
</style>
