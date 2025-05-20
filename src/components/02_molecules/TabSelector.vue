<!-- tab selector to select list type -->
<script setup lang="ts">
  import {ref} from "vue";

  const props = defineProps<{ onSelection: Function, options: {name: string; value: string}[]}>();
  const selectedOption = ref<string>();

  const selectOption = (value: string) => {
    selectedOption.value = value;
    props.onSelection(value);
  }
  selectOption(props.options[0].value);
</script>

<template>
  <div class="tab-wrapper">
    <div v-for="option in options">
      <button v-bind:class="(selectedOption === option.value ? 'tab-button active' : 'tab-button')" @click="selectOption(option.value)">{{option.name}}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.tab-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: .5rem;
  background-color: var(--element-color);
  padding: .5rem 1rem;
  border-radius: $border-radius-mobile;
}

.tab-button {
  background-color: var(--element-color);
  padding: .5rem 1rem;
  color: var(--text-color);
  border: none;
  border-radius: $border-radius-mobile;
  font-size: $font-size-small;
  font-family: "Lexend", sans-serif;

  &.active {
    background-color: $pink;
    color: var(--text-color-contrast);
  }
}
</style>
