<!-- ul element to wrap lists -->
<script setup lang="ts">

</script>

<template>
    <ul class="list">
      <slot/>
    </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacer;
  width: 100%;
  max-width: $max-content-with-mobile;
  padding: 0;
}
</style>
