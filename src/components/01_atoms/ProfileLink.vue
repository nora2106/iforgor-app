<!-- component template -->
<script setup lang="ts">

</script>

<template>
  <router-link to="/profile" class="profile-wrapper">
    <div class="profile-container">
      <Icon icon="ix:user-profile-filled"/>
    </div>
  </router-link>

</template>

<style lang="scss" scoped>
.profile-wrapper {
  position: absolute;
  right: 1rem;

  @media(min-width: $breakpoint-md) {
    position: relative;
    justify-self: flex-end;
    width: 100%;
    min-width: 12rem;
    right: 0;
    grid-column: 1;
  }
}

.profile-container {
  width: 5rem;
  height: 5rem;
  background-color: var(--component-bg);
  border-radius: $border-radius-mobile;
  padding: .5rem;
  margin: 0 auto;

  svg {
    width: 100%;
    height: auto;
    color: var(--text-color);
  }

  @media(min-width: $breakpoint-md) {
    height: 100%;
    width: fit-content;
    aspect-ratio: 1/1;
  }
}
</style>
