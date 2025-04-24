<!-- round button with icon -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonIcon',
  props: {
    action: Function,
  },
  setup() {

    return {

    }
  },
  components: {

  }

});
</script>

<template>
  <button @click="action()">
    <slot/>
  </button>
</template>

<style scoped>

</style>
