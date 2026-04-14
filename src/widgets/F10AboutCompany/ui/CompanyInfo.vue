<script lang="ts" setup></script>

<template>
  <div class="company-info font-default">
    <h2 class="font-extra-bold">О компании</h2>
    <div class="sm-logo" />
    <p>
      ООО "Строймонтаж" работает с 2005 года в Московской области и
      специализируется на строительстве жилых, промышленных и административных
      зданий. 
    </p>
    <p>
      За плечами застройщика — десятки реализованных проектов: административные
      здания, торговые и спортивные комплексы, объекты коммунального хозяйства,
      складские и логистические центры, автовокзалы.
    </p>
    <p>
      С 2011 года компания воплощает в жизнь проект — жилой комплекс «Новое
      Жегалово» в городе Щёлково.
    </p>
    <p>
      Сочетая многолетний опыт, современные технологии и ответственный подход к
      каждому этапу строительства, «Строймонтаж» создаёт пространства, где
      хочется жить, работать и растить детей.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.company-info {
  grid-area: content;
  margin-right: 40px;
  font-size: clamp(15px, 2vw, 20px);

  & > p {
    margin-top: 10px;
  }
  & > p + p {
    color: var(--color-grey);
  }
  & > h2 {
    font-size: 40px;
  }

  & .sm-logo {
    @include bg-picture;
    float: right;
    width: 226px;
    height: 159px;
    margin: 0 0 10px 10px;

    background-image: url("/images/SMLogo.webp");
  }
}
</style>
