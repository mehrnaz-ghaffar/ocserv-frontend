<script setup lang="ts">
import { onMounted, ref } from "vue";
import OInput from "@/UI/OInput.vue";

const username: string = "";
const password: string = "";
const requiredRule = (value: string) => {
  return value ? true : "This field is required";
};
const minLengthRule = (value: string) => {
  return value.length >= 6 ? true : "Minimum length is 6 characters";
};

onMounted(() => {
  console.log(`login mounted.`);
});

const inputFields = [
  {
    value: username,
    rules: [requiredRule],
    placeholder: "enter username",
    component: OInput,
  },
  {
    rules: [requiredRule, minLengthRule],
    placeholder: "******",
    component: OInput,
  },
];
</script>

<template>
  <div>
    <h1>Login</h1>

    <div
      v-for="(field, fieldIndex) in inputFields"
      :key="fieldIndex"
      class="mb-5"
    >
      <component
        v-model="field.value"
        :is="field.component"
        :placeholder="field.placeholder"
        :rules="field.rules"
      >
      </component>
    </div>
  </div>
</template>

<style scoped></style>
