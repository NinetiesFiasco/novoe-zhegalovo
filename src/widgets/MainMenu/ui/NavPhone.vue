<script lang="ts" setup>
import { useContactsStore } from "~/entities"

const contacts = useContactsStore()
</script>

<template>
  <a href="tel:+79991234567" class="nav__phone">{{ contacts.phone }}</a>
</template>

<style lang="scss" scoped>
.nav__phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 14px;

  font-size: 14px;
  font-weight: 500;

  color: white;
  background: black;

  border-radius: 999px;

  text-decoration: none;

  transition: all 0.2s ease;
  text-wrap: nowrap;

  &:hover {
    transform: translateY(-1px);
    background: #222;
  }
}
</style>
