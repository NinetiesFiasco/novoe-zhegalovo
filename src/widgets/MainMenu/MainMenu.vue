<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
</script>
<template>
  <div class="main-menu">
    <div class="logo-image"></div>

    <div class="links font-default">
      <PageLink text="Квартиры" link="choose-flat" />
      <PageLink text="Преимущества" link="main-info" />
      <PageLink text="О нас" link="about-company" />
      <PageLink text="Контакты" link="choose-flat" />
    </div>

    <div class="contact-phone font-bold">
      <div>+7 (ХХХ) ХХ-ХХ-ХХ</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-menu {
  display: flex;
  align-items: center;
  white-space: nowrap;
  caret-color: transparent;

  & .logo-image {
    @include bg-picture;
    margin: 30px 0 0 clamp(20px, 3vw, 40px);
    width: 163px;
    height: 153px;
    background-image: url("/images/Logo.svg");
    flex-shrink: 0;
  }
  & .links {
    margin-left: clamp(20px, 5vw, 115px);
    display: flex;
    font-size: clamp(15px, 1.5vw, 20px);

    & > a {
      margin: 0 clamp(10px, 2vw, 30px);
    }
  }

  & .contact-phone {
    margin-left: auto;
    margin-right: 40px;
    font-size: clamp(15px, 2vw, 30px);
    color: var(--color-white);
  }
}
</style>
