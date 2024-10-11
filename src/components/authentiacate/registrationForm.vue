<script setup lang="ts">
import OInput from "../UI/OInput.vue";
import Ostepper from "../UI/OStepper.vue";
import { onMounted } from "vue";
import api from "@/services/api";

defineProps<{
  //   msg: string
}>();

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
    <input type="text" class="input m-5" />
    <OInput />

    <Ostepper />
  </div>
</template>
