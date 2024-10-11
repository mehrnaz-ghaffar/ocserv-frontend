<script setup lang="ts">
import OInput from "../UI/OInput.vue";
import Ostepper from "../UI/OStepper.vue";
import { onMounted, ref } from "vue";
import api from "@/services/api";

defineProps<{
  //   msg: string
}>();

const inputValue = ref("");

const requiredRule = (value: string) => {
  return value ? true : "This field is required";
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
  <div class="text-xl bg-blue underline">
    <OInput
      v-model="inputValue"
      placeholder="Enter your name"
      prependIcon="fas fa-user"
      :rules="[requiredRule, minLengthRule]"
    />

    <Ostepper />
  </div>
</template>
