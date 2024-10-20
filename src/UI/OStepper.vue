<template>
  <div>
    <ol class="flex items-center w-full mb-4 sm:mb-5">
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="flex w-full items-center"
        :class="
          index < currentStep
            ? 'text-blue-600 dark:text-blue-500'
            : 'text-gray-500 dark:text-gray-700'
        "
      >
        <div
          class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
        >
          <svg
            class="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path
              d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
            />
          </svg>
        </div>
        <div
          class="after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
        ></div>
      </li>
    </ol>

    <form @submit.prevent="handleSubmit">
      <h3
        class="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white"
      >
        Invoice details
      </h3>
      <transition name="fade" mode="out-in">
        <component
          :is="steps[currentStep].component"
          v-bind="steps[currentStep].props"
          key="currentStep"
        />
      </transition>
      <div class="flex justify-between mt-4">
        <button
          v-if="currentStep > 0"
          type="button"
          @click="currentStep--"
          class="text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Back
        </button>

        {{ currentStep.value }}
        {{ props.steps.length - 1 }}

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{
            currentStep.value === props.steps.length - 1
              ? "Submit"
              : "Next Step"
          }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  steps: Array<{ component: any; props?: Record<string, any> }>;
}>();

const currentStep = ref(0);
const canProceed = ref(true);

const handleSubmit = () => {
  if (canProceed.value && currentStep.value < props.steps.length - 1) {
    currentStep.value++;
  }
};
</script>

<style scoped>
/* Add any additional styles here */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
