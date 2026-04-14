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
  <div id="mortgage-calculator" class="mortgage-calculator spy-section">
    <h2>Ипотечный калькулятор</h2>
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
  </div>
</template>

<style lang="scss" scoped>
.mortgage-calculator {
  max-width: 1600px;
  width: 100%;
  margin: auto;

  & > h2 {
    margin: 30px 0;
  }
}
</style>
