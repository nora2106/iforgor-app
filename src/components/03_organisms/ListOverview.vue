<!-- list overview of all lists of the selected type -->
<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from '../02_molecules/TaskList.vue'

export default defineComponent({
  name: 'Component',
  setup() {

    return {

    }
  },
  components: {
    TaskList
  }

});
</script>

<template>
    <div>
      <TaskList/>
    </div>
</template>

<style scoped>

</style>
