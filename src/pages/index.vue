<script lang="ts" setup>
import {
  MainMenu,
  HeroBlock,
  AboutProject,
  MainInfo,
  AppInfrastructure,
  TransportConnectivity,
  ApartmentSelector,
  UndergroundParking,
  MortgageCalculator,
  AboutCompany,
} from "~/widgets"
import { CookieNotification } from "~/features"

const { isMobile } = useDevice()
</script>

<template>
  <div class="app-container">
    <MainMenu />
    <CookieNotification />
    <main>
      <HeroBlock />
      <AboutProject />
      <MainInfo />
      <template v-if="!isMobile">
        <AppInfrastructure />
        <TransportConnectivity />
      </template>

      <ApartmentSelector />
      <UndergroundParking />
      <MortgageCalculator />
    </main>
    <footer>
      <AboutCompany />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  color: var(--color-grey-accent);
  scrollbar-width: thin;

  & > main > * {
    margin-bottom: 50px;
  }
}
</style>
