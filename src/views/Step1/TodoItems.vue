<template>
  <ul class="todo-list">
    <todo-item contents="아이템 01" />
    <todo-item :editing="true" contents="아이템 02" />
    <todo-item :completed="true" contents="아이템 03" />
  </ul>
</template>

<script>
import TodoItem from "@/views/Step1/TodoItem";
export default {
  name: "TodoItems",
  components: { TodoItem }
};
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
