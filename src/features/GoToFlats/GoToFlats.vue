<script lang="ts" setup>
import { OpacityLink } from "~/shared/ui"
</script>

<template>
  <OpacityLink class="mobile-link" link="choose-flat">
    <span class="link-text">Выбрать квартиру</span>
  </OpacityLink>
</template>

<style lang="scss" scoped>
.mobile-link {
  position: absolute;
  bottom: 100px;
  right: 25px;

  & .link-text {
    color: var(--color-blue);
    font-size: 20px;
    font-weight: 900;
  }
}
</style>
