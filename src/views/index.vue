<template>
  <div>
    <h1>Hi, I am IFun-ui-template</h1>

    <span>{{ count }}</span>
    <FButton @click="add">默认按钮</FButton>
    <FButton color="red">红色按钮</FButton>
    <FButton icon="delete" color="red">图标按钮</FButton>
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
