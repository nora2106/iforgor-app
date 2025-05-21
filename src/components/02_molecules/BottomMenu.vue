<!-- sticky menu with action buttons at bottom (mobile only) -->
<script setup lang="ts">
import {MobileMenuButtons} from "@/components/00_utilities/types/general";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";

defineProps<{btns: MobileMenuButtons}>();
</script>

<template>
    <div class="bottom-menu">
      <ButtonIcon v-for="btn in btns" action=""/>
    </div>
</template>

<style lang="scss" scoped>
.bottom-menu {
  background-color: var(--element-color);
  border-radius: $border-radius-mobile;
  padding: 1rem .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  margin: 0 auto;
  bottom: 10%;
}
</style>
