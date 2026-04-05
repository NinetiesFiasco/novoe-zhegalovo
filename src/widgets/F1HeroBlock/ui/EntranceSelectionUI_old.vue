<script lang="ts" setup>
import { PageLink, OpacityLink, EntranceSelector } from "~/shared/ui"

import { useDevice } from "~/shared/utils"

const { isMobile } = useDevice()
</script>

<template>
  <template v-if="isMobile">
    <OpacityLink class="mobile-link" link="choose-flat">
      Выбрать недвижимость
    </OpacityLink>
  </template>
  <template v-else>
    <PageLink link="choose-flat">
      <entrance-selector class="entrance1" :entrance="1" />
    </PageLink>
    <PageLink link="choose-flat">
      <entrance-selector class="entrance2" :entrance="2" />
    </PageLink>
    <PageLink link="choose-flat">
      <entrance-selector class="entrance3" :entrance="3" />
    </PageLink>
  </template>
</template>

<style lang="scss" scoped>
.mobile-link {
  position: absolute;
  bottom: 150px;
  right: 25px;
}

.entrance1,
.entrance2,
.entrance3 {
  position: absolute;
  cursor: pointer;
  caret-color: transparent;
  width: clamp(150px, 16vw, 200px);
}

.entrance1 {
  bottom: 17%;
  left: 44%;
}

.entrance2 {
  bottom: 17%;
  left: 55%;
}

.entrance3 {
  bottom: 17%;
  left: 67%;
}
</style>
