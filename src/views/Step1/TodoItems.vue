<template>
  <ul class="todo-list">
    <todo-item v-for="(item, key) in items" :key="key" v-bind="item" />
  </ul>
</template>

<script>
import TodoItem from "@/views/Step1/TodoItem";
export default {
  name: "TodoItems",
  components: { TodoItem },
  props: {
    items: { type: Array, default: () => [] }
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
