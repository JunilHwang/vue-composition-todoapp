<template>
  <ul class="todo-list">
    <todo-item
      v-for="(item, key) in items"
      :key="key"
      v-bind="item"
      @editing="id => $emit('editing-item', id)"
      @update="({ id, contents }) => $emit('update-item', { id, contents })"
      @delete="id => $emit('delete-item', id)"
      @toggle="id => $emit('toggle-item', id)"
    />
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
