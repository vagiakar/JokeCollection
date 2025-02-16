<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  text: string
}

interface Props {
  id: string
  label: string
  options: Option[]
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits(['change'])

const selectedValue = ref(props.modelValue)
</script>
<template>
  <div class="flex mb-4 items-center">
    <label :for="id" class="text-gray-200 mr-2">{{ label }}</label>
    <select
      class="bg-gray-200 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      :id="id"
      v-model="selectedValue"
      @change="$emit('change', selectedValue)"
    >
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
