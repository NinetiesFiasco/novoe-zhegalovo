<script lang="ts" setup>
import { YandexMap, KeyBenefits } from "~/features"
</script>
<template>
  <div class="main-info">
    <div class="top-part">
      <div class="company-description">
        <p>
          <span class="company-name font-h2">ЖК «Новое Жегалово»</span> —
          современный жилой квартал в городе Щёлково, сочетающий комфорт
          городской инфраструктуры, близость к природе и удобную транспортную
          доступность до Москвы.
        </p>
        <p>
          Идеальное пространство для семейной жизни в спокойном и
          благоустроенном районе Подмосковья.
        </p>
      </div>
      <div class="yandex-map">
        <ClientOnly>
          <YandexMap />
        </ClientOnly>
      </div>
    </div>
    <div class="bottom-part">
      <h2>бережное равновесие между</h2>
      <p>современной инфраструктурой и живым дыханием природы</p>
      <div class="bottom-info-container">
        <div class="bottom-info-picture" />
        <div class="bottom-info-description">
          <KeyBenefits />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;

  .top-part {
    flex: 1;

    & > div {
      display: inline-block;
    }

    & .company-description {
      color: var(--color-grey);
      width: 65%;
      vertical-align: top;
      line-height: 133%;
      letter-spacing: 0%;
      font-size: clamp(15px, 2vw, 25px);

      & .company-name {
        color: var(--color-grey-accent);
        font-size: clamp(30px, 3.5vw, 40px);
      }

      & p:nth-child(n + 2) {
        margin-top: 20px;
      }
    }

    & .yandex-map {
      margin-left: 20px;
      padding-top: 20px;
      width: calc(35% - 20px);
    }
  }

  & .bottom-part {
    flex: 2;
    padding-top: 10px;
    & h2 {
      color: var(--color-grey-accent);
      font-size: 35px;
      line-height: 35px;
      text-transform: uppercase;
    }
    & p {
      color: var(--color-blue);
      font-size: clamp(20px, 2.5vw, 35px);
      line-height: 35px;
      text-align: end;
      margin-bottom: 30px;
    }

    & .bottom-info-container {
      display: flex;

      & .bottom-info-picture {
        @include bg-picture;

        background-image: url("/images/ViewFromLake.webp");
        height: 370px;
        flex: 1;
        flex-shrink: 1;
        border-radius: var(--radius-md);
        margin-right: 20px;
      }

      & .bottom-info-description {
        width: 600px;
        flex-shrink: 0;
        min-width: 0;
      }
    }
  }
}
</style>
