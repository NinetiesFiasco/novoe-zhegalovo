<script lang="ts" setup>
import { BackgroundWithSelection } from "./ui"
</script>

<template>
  <div class="hero-block">
    <h2>О проекте</h2>
    <button>Выбрать квартиру</button>
    <BackgroundWithSelection />
    <button>Видео комплекса</button>
    <button>Панорама из яндекса</button>
    <p>
      Подарите своей семье квартиру о которой мечтали! ЖК "Новое Жегалово" -<br />
      место, где растут счастливые дети и крепнут семейные традиции. Успейте<br />
      забронировать квартиру на выгодных условиях.
    </p>
  </div>
</template>

<style scoped lang="scss">
.hero-block {
  width: inherit;
  height: inherit;
  position: relative;
}
</style>
