<template>
  <div>
    <h1>Set Configs</h1>

    <div
      v-for="(field, fieldIndex) in configFields"
      :key="fieldIndex"
      class="mb-5"
    >
      <component
        v-model="configFields[fieldIndex].model"
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
import { reactive, ref, Ref } from "@vue/reactivity";
import OInput from "@/UI/OInput.vue";
import OTextAre from "@/UI/OTextArea.vue";

const capchaSecretkey: Ref<string> = ref("");
const capchaSiteKey: Ref<string> = ref("");
const defaultTraffic: Ref<number> = ref(0);

let configFields = reactive([
  {
    model: defaultTraffic,
    rules: [],
    placeholder: "enter defaultTraffic",
    inputType: "number",
    component: OInput,
  },
  {
    model: capchaSecretkey,
    rules: [],
    placeholder: "enter capcha secret key",
    component: OTextAre,
  },
  {
    model: capchaSiteKey,
    rules: [],
    placeholder: "enter capcha site key",
    component: OTextAre,
  },
]);
</script>

<style></style>
