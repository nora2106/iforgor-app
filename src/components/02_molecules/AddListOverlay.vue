<!-- component template -->
<script lang="ts">
import {defineComponent, ref, defineEmits} from 'vue';
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";

export default defineComponent({
  name: 'AddListOverlay',
  props: {
    close: Function,
  },
  emits: ['submit'],
  setup(props, { emit }) {
    let name = ref("");
    let errorMessage = ref("");
    const sendValue = () => {
      if(name.value !== "") {
        emit('submit', name.value);
      }
      else {
        errorMessage.value = "Bitte gib einen Namen ein."
      }
    }

    return {
      sendValue,
      name,
      errorMessage
    }
  },
  components: {
    ButtonIcon
  }

});
</script>

<template>
    <div>
      <h3>Neue Liste hinzufügen</h3>
      <input v-model="name" type="text" placeholder="Name"/>
      <ButtonIcon :action="sendValue">Erstellen</ButtonIcon>
      <p>{{errorMessage}}</p>
    </div>
</template>

<style scoped>

</style>
