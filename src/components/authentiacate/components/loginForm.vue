<template>
  <div>
    <h1 class="mx-auto">{{ $t("login") }}</h1>

    <div
      v-for="(field, fieldIndex) in inputFields"
      :key="fieldIndex"
      class="mb-5"
    >
      <component
        v-model="inputFields[fieldIndex].model"
        :is="field.component"
        :placeholder="field.placeholder"
        :rules="field.rules"
        :inputType="field.inputType"
      >
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref, reactive, Reactive, computed, watch } from "vue";
import OInput from "@/UI/OInput.vue";
import OTextAre from "@/UI/OTextArea.vue";

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const description: Ref<string> = ref("");

const requiredRule = (value: string) => {
  return value ? true : "This field is required";
};
const minLengthRule = (value: string) => {
  return value.length >= 6 ? true : "Minimum length is 6 characters";
};

onMounted(() => {
  console.log(`login mounted.`);
});

let inputFields = reactive([
  {
    model: username,
    rules: [requiredRule],
    placeholder: "enter username",
    component: OInput,
  },
  {
    model: password,
    rules: [requiredRule, minLengthRule],
    placeholder: "******",
    component: OInput,
    inputType: "password",
  },
  {
    model: description,
    rules: [requiredRule],
    placeholder: "enter description",
    component: OTextAre,
  },
]);
</script>

<style scoped></style>
