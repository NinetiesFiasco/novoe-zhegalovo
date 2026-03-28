<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
</script>
<template>
  <div class="main-menu">
    <div class="background"></div>
    <ul class="links font-default">
      <li><PageLink text="Квартиры" link="choose-flat" /></li>
      <li><PageLink text="Преимущества" link="main-info" /></li>
      <li><PageLink text="О нас" link="about-company" /></li>
      <li><PageLink text="Контакты" link="choose-flat" /></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.main-menu {
  position: absolute;
  top: 60px;
  right: 25px;
  width: 287px;
  height: 217px;
  align-items: center;
  white-space: nowrap;
  caret-color: transparent;
  padding: 27px 21px;

  & .background {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: white;
    border-radius: var(--radius-md);
    border: 1px solid grey;
    opacity: 0.2;
    z-index: 90;
  }

  & .links {
    position: absolute;
    top: 30px;
    left: 45px;
    font-size: 30px;
    color: var(--color-header-footer);
    text-shadow: -1px 3px 5px rgba(0, 0, 0, 0.9);
    z-index: 100;

    & li {
      height: 36px;
      cursor: pointer;
      transform: scale(1);
      transition: transform 0.3s ease;
    }
    & li:hover {
      transform: scale(1.05);
    }

    & li + li {
      margin-top: 6px;
    }
  }
}
</style>
