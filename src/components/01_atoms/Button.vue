<!-- round button with icon -->
<script setup lang="ts">
  const props = defineProps<{
    action: () => void
  }>();
</script>

<template>
  <button @click="props.action">
    <slot/>
  </button>
</template>

<style scoped>

</style>
