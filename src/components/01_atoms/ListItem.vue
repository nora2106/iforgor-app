<!-- single list item, can have different types -->
<script setup lang="ts">
import {ref} from "vue";

const isChecked = ref(false);

</script>

<template>
    <li>
      <slot/>
    </li>
</template>

<style scoped>

</style>
