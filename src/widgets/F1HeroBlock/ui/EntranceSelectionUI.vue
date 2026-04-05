<script lang="ts" setup>
const { entranceNumber, top } = defineProps<{
  entranceNumber: number
  top: number
}>()

const goTo = () => {
  if (document) {
    document.getElementById("choose-flat")?.scrollIntoView({
      behavior: "smooth",
    })
  }
}

// import { useDevice } from "~/shared/utils"
</script>

<template>
  <div class="entrance-link" :style="{ top: `${top}px` }" @click="goTo">
    <div class="link-balloon">
      <div class="bg-transparency" />
      <span>{{ entranceNumber }}</span>
    </div>
    <div class="selection-area">
      <div class="bg-transparency" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entrance-link {
  position: absolute;
  cursor: pointer;
  height: 450px;
  width: 50px;

  & .link-balloon {
    position: absolute;
    top: -50px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    line-height: 45px;
    font-size: 30px;
    font-weight: 700;
    color: white;
    border: 2px solid white;
    text-align: center;

    & .bg-transparency {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: white;
      opacity: 0.2;
      transition: opacity 0.3s ease;
    }
  }
  & .selection-area {
    position: absolute;
    height: 450px;
    width: 100px;
    left: -20px;

    & .bg-transparency {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: white;
      opacity: 0;
      border-radius: 20px;
      transition: opacity 0.3s ease;
    }
  }
}
.entrance-link:hover {
  & .link-balloon .bg-transparency {
    opacity: 0.4;
  }
  & .selection-area .bg-transparency {
    opacity: 0.3;
  }
}
</style>
