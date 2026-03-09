<script lang="ts" setup>
type Props = {
  text: string
  link: string
}
const props = defineProps<Props>()

const scrollToSection = () => {}
</script>

<template>
  <a :href="`#${props.link}`" class="link"> {{ props.text }} </a>
</template>

<style lang="scss" scoped>
.link {
  color: var(--color-white);
  text-decoration: none;
}
</style>
