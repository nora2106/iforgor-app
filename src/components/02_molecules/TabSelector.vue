<!-- tab selector to select list type -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TabSelector',
  setup() {

    return {

    }
  },
  components: {

  }

});
</script>

<template>
  <div class="tab-wrapper">
    <button>To-Do</button>
    <button>Shopping</button>
    <button>Rezepte</button>
  </div>
</template>



<style scoped>
.tab-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
