<script lang="ts" setup>
type Props = {
  text: string
  link: string
}
const props = defineProps<Props>()

const scrollToSection = () => {}
</script>

<template>
  <a class="page-link-button" :href="`#${props.link}`">
    {{ props.text }}
    <div class="link-icon" />
  </a>
</template>

<style lang="scss" scoped>
.page-link-button {
  display: inline-flex;
  min-width: 100px;
  padding-left: 10px;
  align-items: center;
  background: var(--color-blue-opacity);
  color: var(--color-white);
  border-radius: var(--radius-md);
  text-decoration: none;
  height: 36px;

  & .link-icon {
    @include bg-picture;
    background-image: url("/icons/linkIcon.png");
    width: 24px;
    height: 24px;
    margin: 0px 10px 0px 10px;
  }
}
</style>
