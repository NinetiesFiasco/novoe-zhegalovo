<script lang="ts" setup>
import { AppSection } from "~/shared/ui"
import {
  MainMenu,
  HeroBlock,
  AboutProject,
  MainInfo,
  AppInfrastructure,
  YandexMap,
  ApartmentSelector,
  UndergroundParking,
  MortgageCalculator,
  DroneVideo,
  AboutCompany,
} from "~/widgets"
</script>

<template>
  <div class="app-container">
    <MainMenu />
    <main>
      <HeroBlock />
      <AboutProject />
      <MainInfo />
      <AppInfrastructure />
      <YandexMap />
      <ApartmentSelector />
      <UndergroundParking />
      <MortgageCalculator />
    </main>
    <footer>
      <AboutCompany />
    </footer>
  </div>
</template>

<style>
@import "swiper/css";
@import "swiper/css/navigation";
@import "swiper/css/pagination";

.app-container {
  color: var(--color-grey-accent);
  scrollbar-width: thin;

  & > main > * {
    margin-bottom: 50px;
  }
}
</style>
