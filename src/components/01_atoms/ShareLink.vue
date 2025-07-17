<!-- component template -->
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open-overlay'): void;
}>();
</script>

<template>
    <div @click="() => {emit('open-overlay')}" class="share-container">
      <Icon icon="ix:user-profile-filled"/>
      <p>Test</p>
    </div>
</template>

<style lang="scss" scoped>

.share-container {
  display: none;
  background-color: var(--component-bg);
  height: 100%;
  width: fit-content;
  aspect-ratio: 1/1;
  border-radius: $border-radius-mobile;
  padding: 1rem;

  svg {
    width: 100%;
    height: auto;
    color: var(--text-color);
  }

  p {
    margin: 0;
    font-size: $font-size-small;
  }

  &:hover {
    cursor: pointer;
  }

  @media(min-width: $breakpoint-md) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-column: 3;
    grid-row: 1;
    gap: 5px;
  }
}
</style>
