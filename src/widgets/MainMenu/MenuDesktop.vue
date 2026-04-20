<script lang="ts" setup>
import { JKLogo } from "~/shared/ui"
import { NavPhone, NavLink } from "./ui"
import { GetCall } from "~/features"
import { useMenuObserver } from "./composables/useMenuObserver"

const isModalCallOpened = ref<boolean>(false)
useMenuObserver()
</script>

<template>
  <header>
    <nav>
      <div class="nav__links">
        <NavLink link="#hero-block" text="Главная" />
        <NavLink link="#about-project" text="О проекте" />
        <NavLink link="#app-infrastructure" text="Инфраструктура" />
        <NavLink link="#apartment-selector" text="Квартиры" />
        <NavLink link="#about-company" text="О компании" />
      </div>
      <div class="nav__logo">
        <JKLogo />
      </div>
      <NavPhone />
      <GetCall
        :is-open="isModalCallOpened"
        @toggle="isModalCallOpened = !isModalCallOpened"
        text="Заказать звонок"
        status="Главное меню"
      />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);

  nav {
    max-width: 1600px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 24px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    /* логотип */
    & .nav__logo {
      font-weight: 600;
      font-size: 18px;
      height: 70px;
      min-width: 80px;

      & > img {
        height: 70px;
      }
    }

    /* контейнер ссылок */
    & .nav__links {
      display: flex;
      text-wrap: nowrap;
    }
  }
}
</style>
