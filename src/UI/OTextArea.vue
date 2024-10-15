<template>
  <div class="w-full">
    <!-- TextArea Wrapper -->
    <div class="relative">
      <!-- TextArea Field -->
      <textarea
        v-model="modelValue"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :class="[
          'block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm resize-none',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
          isDisabled ? 'bg-gray-100' : '',
        ]"
        rows="5"
      ></textarea>

      <!-- Error Message -->
      <p v-if="error" class="text-sm text-red-500 mt-1">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, watch } from "vue";

// Define props for TextArea component
interface Props {
  placeholder?: string;
  rules?: Array<(value: string) => string | boolean>;
  isDisabled?: boolean;
}

// Default props values
const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  isDisabled: false,
});

// Define modelValue for v-model binding
const modelValue = defineModel<string>("modelValue");

// Computed property to determine if there's an error
const error = computed(() => {
  if (!props.rules || props.rules.length === 0 || props.isDisabled)
    return false;

  for (const rule of props.rules) {
    const result = rule(modelValue.value);
    if (result !== true) return true;
  }
  return false;
});

// Computed property for the error message
const errorMessage = computed(() => {
  if (!props.rules || props.rules.length === 0) return "";

  for (const rule of props.rules) {
    const result = rule(modelValue.value);
    if (typeof result === "string") return result;
  }
  return "";
});

// Watch the modelValue for changes
watch(
  () => modelValue.value,
  (newVal) => {
    console.log("textarea modelValue changed:", newVal);
  }
);
</script>

<style scoped>
/* Optional custom styles */
</style>
