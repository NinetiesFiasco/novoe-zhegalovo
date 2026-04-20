<script lang="ts" setup></script>

<template>
  <div class="features__header">
    <h2 class="features__title">Жилой комплекс «Новое Жегалово»</h2>
    <p class="features__subtitle">
      — это идеальное место для комфортной жизни в окружении природы!<br />
      <br />
      Расположенный в живописном месте недалеко от национального парка Лосиный
      остров, этот проект предлагает современные дома, развитую инфраструктуру и
      выгодное расположение. Здесь представлены новые квартиры от застройщика в
      г. Щелково, сочетающие комфорт и разные варианты покупки: с готовой
      отделкой и без отделки.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.features__header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 40px;
  position: relative;
}

.features__title {
  font-size: 36px;
  font-weight: 700;
}

.features__subtitle {
  font-size: 26px;
  color: #666;
}

@media screen and (max-width: 900px) {
  .features__title {
    font-size: 24px;
  }

  .features__subtitle {
    font-size: 18px;
  }
}
</style>
