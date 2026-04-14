<script lang="ts" setup>
import { JKLogo } from "~/shared/ui"
import { NavPhone } from "./ui"
import { GetCall } from "~/features"

const isModalCallOpened = ref<boolean>(false)

const toggle = () => {
  isModalCallOpened.value = !isModalCallOpened.value
}

onMounted(() => {
  const links = document.querySelectorAll(".nav__link")
  const sections = document.querySelectorAll(".spy-section")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"))

          const id = entry.target.id
          const link = document.querySelector(`.nav__link[href="#${id}"]`)

          link?.classList.add("active")
        }
      })
    },
    {
      rootMargin: "-50% 0px -50% 0px",
    },
  )

  sections.forEach((s) => observer.observe(s))
})
</script>

<template>
  <header>
    <nav>
      <div class="nav__links">
        <a href="#hero-block" class="nav__link active"> Главная </a>
        <a href="#about-project" class="nav__link">О проекте</a>
        <a href="#app-infrastructure" class="nav__link">Инфраструктура</a>
        <a href="#apartment-selector" class="nav__link">Квартиры</a>
        <a href="#mortgage-calculator" class="nav__link">Ипотека</a>
        <a href="#about-company" class="nav__link">О компании</a>
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
      <!-- <GetCall @toggle="toggle" />
      <ModalGetCall :is-open="isModalCallOpened" @close="toggle" /> -->
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

      & > img {
        height: 70px;
      }
    }

    /* контейнер ссылок */
    & .nav__links {
      display: flex;
      gap: 8px;
      text-wrap: nowrap;
    }

    /* кнопки */
    & .nav__link {
      position: relative;

      padding: 8px 14px;
      border: none;
      background: none;

      font-size: 14px;
      font-weight: 500;
      color: #333;
      text-decoration: none;

      border-radius: 8px;
      cursor: pointer;

      transition: all 0.2s ease;
    }
    & .nav__link:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    /* активная страница */
    & .nav__link.active {
      color: #000;
    }

    /* underline анимация */
    & .nav__link::after {
      content: "";
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 4px;

      height: 2px;
      background: black;

      transform: scaleX(0);
      transform-origin: center;

      transition: transform 0.2s ease;
    }

    & .nav__link.active::after {
      transform: scaleX(1);
    }
  }
}
</style>
