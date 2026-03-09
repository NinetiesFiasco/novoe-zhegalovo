<script lang="ts" setup>
import { YandexMap, KeyBenefits } from "~/features"
</script>
<template>
  <div>
    <div class="top-info">
      <div class="company-description">
        <span class="company-name">ЖК «Новое Жегалово»</span> — современный
        жилой квартал в городе Щёлково, сочетающий комфорт городской
        инфраструктуры, близость к природе и удобную транспортную доступность до
        Москвы. Идеальное пространство для семейной жизни в спокойном и
        благоустроенном районе Подмосковья.
      </div>
      <div class="yandex-map">
        <ClientOnly>
          <YandexMap />
        </ClientOnly>
      </div>
    </div>
    <div class="bottom-info">
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
.top-info {
  & > div {
    display: inline-block;
  }

  & .company-description {
    color: var(--color-grey);
    width: 65%;
    vertical-align: top;

    & .company-name {
      color: var(--color-grey-accent);
    }
  }

  & .yandex-map {
    width: 35%;
  }
}

.bottom-info {
  & h2 {
    color: var(--color-grey-accent);
  }
  & p {
    color: var(--color-blue-secondary);
  }

  & .bottom-info-container {
    display: flex;

    & .bottom-info-picture {
      @include bg-picture;

      background-image: url("/images/ViewFromLake.png");
      height: 370px;
      flex: 7;
      flex-shrink: 0;
      border-radius: var(--radius-md);
    }

    & .bottom-info-description {
      flex: 6;
      min-width: 0;
    }
  }
}
</style>
