<script lang="ts" setup>
useHead({
  script: [
    {
      src: "https://ipoteka.domclick.ru/calc-reg/calculator-injector.js",
    },
  ],
})
</script>

<template>
  <ClientOnly>
    <iframe
      id="calculator-iframe"
      src="https://ipoteka.domclick.ru/calc-reg/calculator.html"
      frameborder="no"
      scrolling="no"
      width="100%"
      height="600"
    />
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
