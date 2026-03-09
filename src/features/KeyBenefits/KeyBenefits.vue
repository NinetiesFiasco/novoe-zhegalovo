<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue"
import { ToggleButton, PageLinkButton } from "~/shared/ui/buttons"
import { Benefits, BenefitsUI, isBenefit } from "./const/Benefits"
import type { TBenefits } from "./const/Benefits"
import BenefitDescription from "./ui/BenefitDescription"

const state = ref<TBenefits>(Benefits.Comfort)

let index = 0
const benefitValues = Object.values(Benefits) as TBenefits[]
const isSliderBlocked = ref<Boolean>(false)

const setActiveState = (activeValue: string): void => {
  if (isBenefit(activeValue)) {
    state.value = activeValue
    index = benefitValues.indexOf(state.value)
  }
}

let intervalId: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  intervalId = setInterval(() => {
    if (!isSliderBlocked.value) {
      index = (index + 1) % benefitValues.length
      state.value = benefitValues[index]!
    }
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const onMouseOver = () => {
  isSliderBlocked.value = true
}
const onMouseOut = () => {
  isSliderBlocked.value = false
}
</script>

<template>
  <div class="key-benefits" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <div class="choose-benefit">
      <template v-for="benefit of Benefits">
        <ToggleButton
          :text="BenefitsUI[benefit]"
          :isActive="state === benefit"
          :value="benefit"
          @setActive="setActiveState"
        />
      </template>
    </div>
    <BenefitDescription :state="state" />
    <PageLinkButton text="Выбрать квартиру" link="choose-flat" />
  </div>
</template>

<style lang="scss" scoped>
.key-benefits {
  border: 2px solid var(--color-grey-accent);
  border-radius: var(--radius-md);
  height: 370px;
  padding: 20px;

  & .choose-benefit {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
