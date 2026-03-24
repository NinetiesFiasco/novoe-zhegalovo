<script lang="ts" setup></script>

<template>
  <footer>
    <img class="jk-logo" src="/images/Logo.svg" alt="Логотип ЖК" />

    <div class="socials">
      <img class="social" src="/icons/social-1.png" alt="" />
      <img class="social" src="/icons/social-email.png" alt="" />
      <img class="social" src="/icons/social-telegram.png" alt="" />
    </div>

    <div class="contacts">
      <div class="font-medium">+7 (ХХХ) ХХ-ХХ-ХХ</div>
      <div>Email:</div>
      <div>Адрес:</div>
      <div>(Пн-Вс с 10:00 до 21:00)</div>
    </div>

    <div class="links">
      <div>Квартиры</div>
      <div>Преимущества</div>
      <div>О нас</div>
      <div>Контакты</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  grid-area: footer;
  background: var(--color-grey-accent);
  height: 225px;
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
