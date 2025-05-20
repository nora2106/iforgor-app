<!-- single list item, can have different types -->
<script setup lang="ts">

</script>

<template>
  <li>
    <slot/>
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
  justify-content: center;
  width: 100%;
}

</style>
