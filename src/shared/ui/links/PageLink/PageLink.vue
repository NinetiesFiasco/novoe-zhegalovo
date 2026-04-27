<script lang="ts" setup>
type Props = {
  text?: string
  link: string
}
const props = defineProps<Props>()

const goTo = () => {
  if (document) {
    document.getElementById(props.link)?.scrollIntoView({
      behavior: "smooth",
    })
  }
}
</script>

<template>
  <div @click="goTo" class="link"><slot /> {{ props.text }}</div>
</template>

<style lang="scss" scoped>
.link {
  color: var(--color-white);
  text-decoration: none;
  cursor: pointer;
}
</style>
