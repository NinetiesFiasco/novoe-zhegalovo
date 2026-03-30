<script lang="ts" setup>
type Props = {
  link: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="link-background">
    <a :href="`#${props.link}`" class="link font-default"><slot /></a>
  </div>
</template>

<style lang="scss" scoped>
.link-background {
  position: relative;
  padding: 14px 21px;
}
.link-background::before {
  content: "";
  background: var(--color-blur);
  border-radius: var(--radius-md);
  position: absolute;
  inset: 0;
  z-index: 90;
}
.link {
  padding: 14px 21px;
  position: relative;
  z-index: 100;
  color: var(--color-white);
  text-decoration: none;
}
</style>
