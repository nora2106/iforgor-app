<!-- single list item, can have different types -->
<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'ListItem',
  setup() {
    return {
    }
  },
  components: {

  }

});
</script>

<template>
  <li>
    <slot/>
  </li>
</template>

<style scoped>

</style>
