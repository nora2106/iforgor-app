<!-- tab selector to select list type -->
<script setup lang="ts">
  import {ref} from "vue";
  import {ListType} from "@/components/00_utilities/types/list";

  const props = defineProps<{options: {name: string; value: ListType}[]}>();
  const emit = defineEmits<{
    (e: 'select', value: ListType): void
  }>()
  const selectedOption = ref<string>();

  const selectOption = (value: ListType) => {
    selectedOption.value = value;
    emit('select', value)
  }
  selectOption(props.options[0].value);
</script>

<template>
  <div class="tab-wrapper">
    <button v-for="option in options" v-bind:class="(selectedOption === option.value ? 'tab-button active' : 'tab-button')" @click="selectOption(option.value)">{{option.name}}</button>
  </div>
</template>

<style lang="scss" scoped>

.tab-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--element-color);
  padding: .4rem .5rem;
  border-radius: $border-radius-mobile;
  width: 90%;
  max-width: $max-content-with-mobile;
  margin-top: 1rem;

  @media(min-width: $breakpoint-md) {
    flex-direction: column;
    background-color: transparent;
    padding: 2rem 1rem;
    margin: 0;
    min-width: 12rem;
  }
}

.tab-button {
  background-color: var(--element-color);
  padding: .7rem 1rem;
  color: var(--text-color);
  border: none;
  border-radius: $border-radius-mobile;
  font-size: $font-size-small;
  font-family: "Lexend", sans-serif;
  flex-basis: 100%;

  @media(min-width: $breakpoint-md) {
    background-color: transparent;
    padding: 1rem 1.3rem;
  }

  &:hover {
    background-color: var(--element-color);
    cursor: pointer;
  }

  &.active {
    background-color: $pink;
    color: var(--text-color-contrast);
  }
}
</style>
