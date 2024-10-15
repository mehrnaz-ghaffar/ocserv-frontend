<script setup lang="ts">
import OInput from "@/UI/OInput.vue";
import Ostepper from "@/UI/OStepper.vue";
import { onMounted, ref } from "vue";
import api from "@/services/api";
import Login from "./loginForm.vue";

defineProps<{
  //   msg: string
}>();

const inputValue = ref("");

const steps = [
  { component: Login, props: {} },
  { component: OInput, props: {} },
  // Add more steps as needed
];

const requiredRule = (value: string) => {
  return Boolean(value) ? true : "This field is required";
};

const minLengthRule = (value: string) => {
  return value.length >= 3 ? true : "Minimum length is 3 characters";
};

onMounted(() => {
  console.log(`the component is now mounted.`);
  fetchData();
});

const fetchData = async () => {
  const response = await api.get("/testt");
};
</script>

<template>
  <div class="max-w-sm mx-auto">
    <!-- <OInput
      v-model="inputValue"
      placeholder="username"
      :rules="[requiredRule, minLengthRule]"
    />-->

    <Ostepper :steps="steps" />

    <!-- <form class="block">hii</form>

    <span class="hidden md:block"
      >hellllllllllllllllllllllllllllllooooooooooo</span
    > -->

    <!-- <Login /> -->
  </div>
</template>
