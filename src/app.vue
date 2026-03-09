<script lang="ts" setup>
import {
  AppSection,
  HeroBlock,
  MainInfo,
  ApartmentSelector,
  MainMenu,
} from "~/widgets"
</script>

<template>
  <main class="app-main">
    <AppSection>
      <HeroBlock>
        <template #main-menu>
          <MainMenu />
        </template>
      </HeroBlock>
    </AppSection>
    <AppSection>
      <MainInfo />
    </AppSection>
    <AppSection id="choose-flat">
      <ApartmentSelector />
    </AppSection>
  </main>
</template>

<style>
.app-main {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>
