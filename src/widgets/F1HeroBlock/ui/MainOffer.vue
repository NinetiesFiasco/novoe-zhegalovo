<script lang="ts" setup>
import { GetCall } from "~/features"
</script>

<template>
  <div class="main-offer">
    <h4>Готовые квартиры</h4>
    <h5>по семейной ипотеке<br /></h5>
    <h3>от <strong>130 000 р.</strong> за м<sup>2</sup></h3>
    <GetCall status="Получить консультацию">
      <span class="get-call">Получить консультацию</span>
    </GetCall>
    <h4>Ключи в день сделки!</h4>
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
