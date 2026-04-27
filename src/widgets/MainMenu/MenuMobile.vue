<script lang="ts" setup>
import { JKLogo } from "~/shared/ui"
import { NavPhoneButton, NavLink, BurgerButton } from "./ui"
import { GetCall } from "~/features"
import { useMenuObserver } from "./composables/useMenuObserver"

useMenuObserver()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header>
    <nav>
      <BurgerButton :is-open="isOpen" @toggle="toggleMenu" />

      <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

      <div :class="['menu', { open: isOpen }]">
        <div class="nav__links" @click="toggleMenu">
          <NavLink link="hero-block" text="Главная" />
          <NavLink link="about-project" text="О проекте" />
          <!-- <NavLink link="#app-infrastructure" text="Инфраструктура" /> -->
          <NavLink link="apartment-selector" text="Квартиры" />
          <NavLink link="about-company" text="О компании" />
        </div>
        <div class="nav__logo">
          <JKLogo />
        </div>
        <NavPhoneButton />
        <GetCall status="Главное меню"> Заказать звонок </GetCall>
      </div>

      <!--  -->
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header > nav {
  z-index: 200;
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px;
  border-radius: 10px;
  border: 1px solid grey;

  .menu {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100%;
    background: white;
    transition: 0.3s;
    z-index: 1000;
    padding: 20px;
    display: flex;
    flex-direction: column;

    & > * {
      margin-top: 20px;
    }

    & .nav__links {
      display: flex;
      flex-direction: column;
    }

    & .nav__logo {
      display: flex;
      justify-content: center;
    }

    &.open {
      right: 0;
    }

    & ul {
      list-style: none;
      padding: 0;
    }

    & li {
      margin: 20px 0;
    }
  }

  /* Затемнение */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
}
</style>
