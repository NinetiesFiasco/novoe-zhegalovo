<script lang="ts" setup></script>

<template>
  <div class="about-company">
    <div class="left-info-picture" />

    <div class="company-info">
      <h2>застройщик</h2>
      <img class="sm-logo" src="/images/SMLogo.png" alt="Логотип компании" />
      <p>
        ООО "СК "Строймонтаж" работает с 2013 года в городе Щёлково Московской
        области и специализируется на строительстве жилых и нежилых зданий. 
      </p>
      <p>
        За плечами застройщика — десятки реализованных проектов:
        административные здания, торговые и спортивные комплексы, объекты
        коммунального хозяйства, складские и логистические центры.
      </p>
      <p>
        Сегодня компания успешно воплощает в жизнь масштабный проект — жилой
        комплекс «Новое Жегалово» в городе Щёлково.
      </p>
      <p>
        Сочетая многолетний опыт, современные технологии и ответственный подход
        к каждому этапу строительства, «Строймонтаж» создаёт пространства, где
        хочется жить, работать и растить детей.
      </p>
    </div>
    <footer>
      <table>
        <tbody>
          <tr>
            <td rowspan="3">
              <img class="jk-logo" src="/images/Logo.png" alt="Логотип ЖК" />
            </td>
            <td>+7 (ХХХ) ХХ-ХХ-ХХ</td>
            <td>Квартиры</td>
            <td rowspan="3"></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>Преимущества</td>
          </tr>
          <tr>
            <td>Адрес:</td>
            <td>О нас</td>
          </tr>
          <tr>
            <td class="socials">
              <img class="social" src="/icons/social-1.png" alt="" />
              <img class="social" src="/icons/social-email.png" alt="" />
              <img class="social" src="/icons/social-telegram.png" alt="" />
            </td>
            <td>(Пн-Вс с 10:00 до 21:00)</td>
            <td>Контакты</td>
            <td>Заказать обратный звонок</td>
          </tr>
        </tbody>
      </table>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.about-company {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100dvh;

  grid-template-areas:
    "picture content"
    "footer footer";

  & .left-info-picture {
    @include bg-picture;

    background-image: url("/images/AboutCompany.png");
    height: 370px;
    border-radius: var(--radius-md);
    grid-area: picture;
  }

  .company-info {
    grid-area: content;

    & .sm-logo {
      float: right;
    }
  }

  & > footer {
    grid-area: footer;
    background: var(--color-grey-accent);
    height: 300px;
    border-top-left-radius: var(--radius-footer);
    border-top-right-radius: var(--radius-footer);
    color: var(--color-white);

    & > table {
      width: 100%;
      & .socials {
        display: flex;
      }
    }
  }
}
</style>
