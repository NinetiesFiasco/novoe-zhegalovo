<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
import { EntranceSelector } from "~/shared/ui"
</script>

<template>
  <div class="building-back">
    <div class="background"></div>
    <h2>Цены от застройщика!</h2>
    <PageLink link="choose-flat">
      <entrance-selector class="entrance3" :entrance="3" />
    </PageLink>
    <PageLink link="choose-flat">
      <entrance-selector class="entrance2" :entrance="2" />
    </PageLink>
    <PageLink link="choose-flat">
      <entrance-selector class="entrance1" :entrance="1" />
    </PageLink>
  </div>
</template>

<style scoped lang="scss">
.building-back {
  @include bg-picture;

  background-image: url("/images/BuildingBack.png");
  width: inherit;
  height: inherit;
  position: relative;

  & > .background {
    background: white;
    width: 500px;
    height: 60px;
    position: absolute;
    right: 30px;
    top: 20px;
    opacity: 0.2;
    z-index: 90;
    border-radius: var(--radius-md);
  }

  & > h2 {
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    font-size: 40px;
    z-index: 100;
    user-select: none;
  }

  & .entrance1,
  & .entrance2,
  & .entrance3 {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
  }

  & .entrance1 {
    bottom: 21%;
    left: 64%;
  }

  & .entrance2 {
    bottom: 18%;
    left: 53%;
  }

  & .entrance3 {
    bottom: 17%;
    left: 43%;
  }
}
</style>
