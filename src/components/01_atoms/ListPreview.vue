<!-- single list item, can have different types -->
<script setup lang="ts">

</script>

<template>
  <li>
    <div class="icon-container">
      <Icon icon="ph:list-bullets-bold"/>
    </div>
    <slot/>
    <Icon icon="ep:arrow-right-bold"/>
  </li>
</template>

<style lang="scss" scoped>

li {
  list-style: none;
  background-color: var(--element-color);
  padding: .6rem;
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
  padding: 7px;
  svg {
    font-size: 1.2rem;
  }
}

</style>
