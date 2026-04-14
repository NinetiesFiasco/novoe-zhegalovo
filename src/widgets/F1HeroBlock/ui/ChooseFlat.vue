<script lang="ts" setup></script>

<template>
  <a class="flat-link" href="#apartment-selector"> Выбрать квартиру </a>
</template>

<style lang="scss" scoped>
.flat-link {
  @include bg-blur;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  height: 64px;
  width: 350px;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  color: white;
  font-size: 30px;
  text-decoration: none;
  text-align: center;

  backdrop-filter: blur(12px);
  box-shadow: 3px 3px 0.5px -3.5px rgba(255, 255, 255, 1) inset;

  background: linear-gradient(135deg, #6b7c3f, #8fa85c);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
}
</style>
