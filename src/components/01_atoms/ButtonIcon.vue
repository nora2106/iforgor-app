<!-- round button with icon -->
<script setup lang="ts">
  const props = defineProps<{
    action: () => void,
    icon: string;
    noBg?: boolean
  }>();

</script>

<template>
  <button class="btn" @click="props.action">
    <Icon :icon="props.icon" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 100%;
  background-color: var(--btn-bg-color, var(--btn-color));
  border: none;
  padding: .4rem;

  svg {
    color: var(--btn-icon-color, var(--icon-color));
    font-size: 1.8rem;
  }
}
</style>
