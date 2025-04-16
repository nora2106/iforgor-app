<!-- list overview wrapper with selectable list type -->
<script lang="ts">
import { defineComponent } from 'vue';
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import ListOverview from "@/components/03_organisms/ListOverview.vue";

export default defineComponent({
  name: 'ListSelectorWrapper',
  setup() {

    return {

    }
  },
  components: {
    TabSelector,
    ListOverview
  }

});
</script>

<template>
  <TabSelector/>
  <ListOverview/>
</template>

<style>

</style>
