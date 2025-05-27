<!-- round button with icon -->
<script setup lang="ts">
  const props = defineProps<{
    action: () => void,
    icon: string;
    noBg?: boolean
  }>();

</script>

<template>
  <button class="btn" @click="action">
    <Icon :icon="props.icon" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 100%;
  background-color: var(--btn-bg-color, var(--btn-color));
  border: none;
  padding: var(--btn-padding, .4rem);
  width: var(--btn-size, 3rem);
  height: var(--btn-size, 3rem);

  svg {
    color: var(--btn-icon-color, var(--text-color-contrast));
    font-size: var(--icon-font-size, 1.8rem);
  }

  &:hover {
    cursor: pointer;;
  }
}
</style>
