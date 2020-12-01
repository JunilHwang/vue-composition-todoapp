<template>
  <section class="main">
    <ul class="todo-list">
      <todo-item
        v-for="item in todoItems"
        :key="item.id"
        v-bind="item"
        @update-item="(...args) => $emit('update-item', ...args)"
        @toggle-item="(...args) => $emit('toggle-item', ...args)"
        @remove-item="(...args) => $emit('remove-item', ...args)"
        @update-priority="(...args) => $emit('update-priority', ...args)"
      />
      <template v-if="listLoading">
        <todo-loading-bar v-for="i in 5" :key="`loading_${i}`" />
      </template>
      <template v-if="addLoading">
        <todo-loading-bar />
      </template>
    </ul>
  </section>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoLoadingBar from "@/views/step2/TodoLoadingBar";

export default {
  name: "TodoItems",
  components: { TodoLoadingBar, TodoItem },
  props: {
    todoItems: { type: Array, default: () => [] },
    listLoading: { type: Boolean, default: false },
    addLoading: { type: Boolean, default: false }
  }
};
</script>