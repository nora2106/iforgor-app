<!-- round button with icon -->
<script setup lang="ts">
  const props = defineProps<{
    action: () => void,
    noBg?: boolean
  }>();
</script>

<template>
  <button :class="noBg ? 'btn no-bg' : 'btn'" @click="props.action"/>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 100%;
  padding: 1rem;
  background-color: var(--btn-color);

  &.no-bg {
    background-color: transparent;
  }
}
</style>
