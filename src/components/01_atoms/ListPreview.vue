<!-- single list item, can have different types -->
<script setup lang="ts">

import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";
</script>

<template>
  <li>
    <div class="icon-container">
      <Icon icon="ph:plus-bold"/>
    </div>
    <slot/>
    <Icon icon="ep:arrow-right-bold"/>
  </li>
</template>

<style lang="scss" scoped>

li {
  list-style: none;
  background-color: var(--element-color);
  padding: .8rem;
  border-radius: $border-radius-mobile;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    color: var(--icon-color);
    font-size: 1.2rem;
  }
}

.icon-container {
  background-color: var(--component-bg);
  border-radius: 100%;
  padding: 4px;
  svg {
    font-size: 1.3rem;
  }
}

</style>
