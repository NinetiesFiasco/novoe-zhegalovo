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

const { isMobile } = useDevice()
</script>

<template>
  <div class="app-container">
    <MainMenu />
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
