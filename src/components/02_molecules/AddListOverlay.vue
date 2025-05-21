<!-- component template -->
<script setup lang="ts">
  import {ref} from "vue";
  import Button from "@/components/01_atoms/Button.vue";

  let name = ref("");
  let errorMessage = ref("");

  const emit = defineEmits<{
    (e: 'submit', listName: string): void;
  }>();

  const sendValue = () => {
    if(name.value !== "") {
      emit('submit', name.value);
    }
    else {
      errorMessage.value = "Bitte gib einen Namen ein."
    }
  }
</script>

<template>
    <div>
<!--      <h3>Neue Liste hinzufügen</h3>-->
      <input v-model="name" type="text" placeholder="Name"/>
      <Button :action="sendValue">Erstellen</Button>
      <p>{{errorMessage}}</p>
    </div>
</template>

<style scoped>

</style>
