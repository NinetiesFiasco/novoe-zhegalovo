<script lang="ts" setup>
type Props = {
  pictures: Array<string>
}

const emit = defineEmits<{
  (e: "close"): void
}>()

const close = () => {
  emit("close")
}

const props = defineProps<Props>()
</script>

<template>
  <div class="picture-viewer">
    <div class="close" @click="close">X</div>
    <div v-for="picture of props.pictures">{{ picture }}</div>
    <img :src="props.pictures[0]" />
  </div>
</template>

<style lang="scss" scoped>
.picture-viewer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: black;
  font-size: 50px;
  cursor: pointer;
}
</style>
