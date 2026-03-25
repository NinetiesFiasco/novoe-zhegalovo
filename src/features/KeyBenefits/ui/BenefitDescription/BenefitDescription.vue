<script lang="ts" setup>
import { BenefitDescription } from "../../const/Benefits"
import JKComfort from "./JKComfort"
import JKInfrastructure from "./JKInfrastructure"
import JKEnvironment from "./JKEnvironment"
import type { TBenefits } from "../../const/Benefits"

const props = defineProps<{ state: TBenefits }>()
</script>

<template>
  <div class="benefit-description">
    <Transition name="fade" mode="out-in">
      <div :key="state">
        <h2>{{ BenefitDescription[state].head }}</h2>
        <template v-show="state === 'main'">
          <JKComfort />
        </template>
        <template v-show="state === 'infrastructure'">
          <JKInfrastructure />
        </template>
        <template v-show="state === 'environment'">
          <JKEnvironment />
        </template>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.benefit-description {
  overflow-y: auto;

  & h2 {
    white-space: nowrap;
    font-size: var(--font-size-md-adaptive);
    color: var(--color-grey-accent);
  }

  & li {
    color: var(--color-grey-accent);
    margin-top: 6px;
    font-size: 15px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
