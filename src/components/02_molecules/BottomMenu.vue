<!-- sticky menu with action buttons at bottom (mobile only) -->
<script setup lang="ts">
import {MobileMenuButtons} from "@/components/00_utilities/types/general";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";

defineProps<{btns: MobileMenuButtons}>();
</script>

<template>
    <div class="bottom-menu">
      <ButtonIcon v-for="btn in btns" :action="btn.onClick" :icon="btn.icon"/>
    </div>
</template>

<style lang="scss" scoped>
.bottom-menu {
  background-color: var(--element-color);
  border-radius: 10em;
  padding: .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  margin: 0 auto;
  bottom: 5%;
  width: fit-content;
  --btn-bg-color: transparent;
  --btn-icon-color: var(--text-color);
  gap: .5rem;

  :nth-child(2) {
    --btn-bg-color: var(--btn-bg-color);
    --btn-icon-color: var(--text-color-contrast);
    transform: scale(1.1);
  }

  @media(min-width: $breakpoint-sm) {
    display: none;
  }
}
</style>
