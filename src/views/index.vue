<template>
  <div>
    <h1>Hi, I am IFun-ui-template</h1>

    <button @click="add">{{ count }}</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const count = ref(0);

const add = () => {
  count.value++;
};
</script>
<style scoped>
div {
  text-align: center;
}
</style>
