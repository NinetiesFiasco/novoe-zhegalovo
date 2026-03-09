<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
</script>
<template>
  <div class="main-menu">
    <div class="logo-png"></div>

    <div class="links">
      <PageLink text="Квартиры" link="choose-flat" />
      <PageLink text="Преимущества" link="choose-flat" />
      <PageLink text="О нас" link="choose-flat" />
      <PageLink text="Контакты" link="choose-flat" />
    </div>

    <div class="contact-phone">
      <div>+7 (ХХХ) ХХ-ХХ-ХХ</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-menu {
  display: flex;
  align-items: center;

  & .logo-png {
    @include bg-picture;

    width: 163px;
    height: 153px;
    top: 30px;
    left: 40px;
    background-image: url("/images/Logo.svg");
  }
  & .links {
    margin-left: 90px;
    display: flex;
    gap: 30px;
  }

  & .contact-phone {
    margin-left: auto;
    color: var(--color-white);
  }
}
</style>
