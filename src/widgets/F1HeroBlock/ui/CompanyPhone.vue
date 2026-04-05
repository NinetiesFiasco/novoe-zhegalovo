<script lang="ts" setup>
import { useContactsStore } from "~/entities"
const contacts = useContactsStore()
</script>

<template>
  <div class="contact-phone font-bold">
    <div>{{ contacts.phone }}</div>
  </div>
</template>

<style lang="scss" scoped>
.contact-phone {
  position: absolute;
  bottom: 30px;
  right: 25px;
  font-size: 30px;
  color: var(--color-white);
}
</style>
