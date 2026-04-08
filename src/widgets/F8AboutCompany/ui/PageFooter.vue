<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
import { useContactsStore } from "~/entities"

const contacts = useContactsStore()
</script>

<template>
  <footer>
    <img class="jk-logo" src="/images/Logo.svg" alt="Логотип ЖК" />

    <div class="socials">
      <img class="social" src="/icons/social-1.png" alt="" />
      <img class="social" src="/icons/social-email.png" alt="" />
      <img class="social" src="/icons/social-telegram.png" alt="" />
    </div>

    <div class="contacts">
      <div class="font-medium">{{ contacts.phone }}</div>
      <div>Email: {{ contacts.email }}</div>
      <div>Адрес: {{ contacts.address }}</div>
      <div>{{ contacts.workTime }}</div>
    </div>

    <div class="links">
      <div><PageLink text="В начало" link="hero-block" /></div>
      <div><PageLink text="Квартиры" link="choose-flat" /></div>
      <div><PageLink text="Преимущества" link="main-info" /></div>
      <div><PageLink text="Генплан" link="gen-plan" /></div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  grid-area: footer;
  background: var(--color-grey-accent);
  height: 190px;
  margin-top: 30px;
  border-top-left-radius: var(--radius-footer);
  border-top-right-radius: var(--radius-footer);
  color: var(--color-white);
  display: flex;

  & .jk-logo {
    height: 130px;
    margin: 15px 0 0 40px;
  }

  & .socials {
    display: flex;

    & .social {
      width: 30px;
      height: 30px;
      margin: 115px 3px 0 3px;
    }
  }

  & .contacts {
    margin: 16px 0 0 120px;

    & div + div {
      margin-top: 13px;
    }
  }

  & .links {
    margin: 16px 0 0 120px;

    & div + div {
      margin-top: 13px;
    }
  }
}
</style>
