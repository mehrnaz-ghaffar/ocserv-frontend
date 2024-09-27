<script setup lang="ts">
import OInput from "../UI/OInput.vue";

defineProps<{
  //   msg: string
}>();
</script>

<template>
  <div class="text-xl bg-blue underline">
    <input type="text" class="input m-5" />
    <OInput />
  </div>
</template>
