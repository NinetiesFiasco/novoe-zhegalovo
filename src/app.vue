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

const { isMobile } = useDevice()
</script>

<template>
  <div class="app-container">
    <header>
      <MainMenu />
    </header>
    <main>
      <HeroBlock />
      <AboutProject />
      <MainInfo />
      <AppInfrastructure />
      <YandexMap />
      <ApartmentSelector />
      <UndergroundParking />
      <MortgageCalculator />
      <DroneVideo />
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
  scroll-behavior: smooth;
  color: var(--color-grey-accent);
  scrollbar-width: thin;

  & > main > * {
    margin-bottom: 50px;
  }
}
</style>
