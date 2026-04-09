<script lang="ts" setup>
const { position, text } = defineProps<{
  text: string
  position: any
}>()

const goTo = () => {
  if (document) {
    document.getElementById("choose-flat")?.scrollIntoView({
      behavior: "smooth",
    })
  }
}
</script>

<template>
  <div class="text-mark" :style="position" @click="goTo">
    <div class="bg-transparency" />
    <span>{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.text-mark {
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: auto;
  max-width: 200px;
  background: white;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}
</style>
