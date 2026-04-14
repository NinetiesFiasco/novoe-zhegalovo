<script lang="ts" setup></script>

<template>
  <div class="features__header">
    <h2 class="features__title">
      Подарите своей семье квартиру,<br />
      о которой мечтали
    </h2>
    <p class="features__subtitle">
      ЖК «Новое Жегалово» — место, где растут счастливые дети и крепнут семейные
      традиции
    </p>
  </div>
</template>

<style lang="scss" scoped>
.features__header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 40px 0;
  position: relative;
}

.features__title {
  font-size: 36px;
  font-weight: 700;
  max-width: 700px;
}

.features__subtitle {
  font-size: 26px;
  color: #666;
  max-width: 600px;
}
</style>
