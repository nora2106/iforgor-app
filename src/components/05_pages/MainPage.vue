<!-- main page of the app -->
<template>
  <h1>Homepage</h1>
  <ListSelectorWrapper/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListSelectorWrapper from "@/components/03_organisms/ListSelectorWrapper.vue";

export default defineComponent({
  name: 'MainPage',
  components: {ListSelectorWrapper},
  setup() {

    return {

    }
  },

});
</script>

<style>

</style>
