<script lang="ts" setup>
const { link, text } = defineProps<{
  link: string
  text: string
}>()
</script>

<template>
  <a :href="link" class="nav__link">{{ text }}</a>
</template>

<style lang="scss" scoped>
/* кнопки */
.nav__link {
  position: relative;

  padding: 8px clamp(6px, 1vw, 14px);
  border: none;
  background: none;

  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-decoration: none;

  border-radius: 8px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  /* активная страница */
  &.active {
    color: #000;
  }

  /* underline анимация */
  &::after {
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

  &.active::after {
    transform: scaleX(1);
  }
}

@media screen and (min-width: 1200px) {
  .nav__link {
    font-size: 18px;
  }
}
@media screen and (min-width: 1400px) {
  .nav__link {
    font-size: 20px;
  }
}
</style>
