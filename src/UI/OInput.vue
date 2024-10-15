<template>
  <div class="w-full">
    <!-- Input Wrapper with Prepend Icon -->
    <div class="relative">
      <!-- Prepend Icon -->
      <span
        v-if="prependIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center"
      >
        <i :class="prependIcon" class="text-gray-500"></i>
      </span>

      <!-- Input Field -->
      <input
        v-model="modelValue"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :class="[
          'block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
        ]"
        :type="inputType"
      />
      <!-- Error Message -->
      <p v-if="error" class="text-sm text-red-500 mt-1">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

const modelValue = defineModel("modelValue");

// Props
interface Props {
  placeholder?: string;
  prependIcon?: string;
  inputType?: string;
  rules?: Array<(value: string) => string | boolean>;
  isDisabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  inputType: "text",
  isDisabled: false,
});

// Emits
// const emit = defineEmits<{
//   (e: "update:modelValue", value: string): void;
// }>();

// Internal state
const error = computed(() => {
  console.log("computed happening", modelValue);

  if (!props.rules || props.rules.length === 0) return false;

  for (const rule of props.rules) {
    const result = rule(modelValue);
    if (result !== true) return true;
  }
  return false;
});

const errorMessage = computed(() => {
  console.log("errorMessage happening", modelValue);

  if (!props.rules || props.rules.length === 0) return "";

  for (const rule of props.rules) {
    const result = rule(modelValue);
    if (typeof result === "string") return result;
  }
  return "";
});

onMounted(() => {
  console.log(`Oinput mounted.`, modelValue);
});

// Emit the updated value
// const updateValue = (value: string) => {
//   console.log("inside updateValue", value);

//   emit("update:modelValue", value);
// };
</script>

<style scoped>
/* Optional styles can be added here */
</style>
