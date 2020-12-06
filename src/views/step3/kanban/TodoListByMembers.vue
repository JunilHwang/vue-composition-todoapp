<template>
  <ul class="todoapp-list-container flex-column-container">
    <li class="todoapp-container" v-for="member in members" :key="member.id">
      <h2>
        <span><strong v-html="member.name" />'s Todo List</span>
      </h2>
      <div class="todoapp">
        <todo-item-appender :member-id="member.id" />
        <section class="main">
          <ul class="todo-list">
            <todo-item
              v-for="item in todoItems[member.id]"
              :key="item.id"
              v-bind="item"
              @updateItem="updateItem"
              @toggleItem="toggleItem"
              @updatePriority="updatePriority"
              @removeItem="removeItem"
              @removeAllItem="removeAllItem"
            />
          </ul>
        </section>
        <todo-footer />
      </div>
    </li>
    <todo-member-appender />
  </ul>
</template>

<script>
import TodoItemAppender from "./TodoItemAppender";
import TodoMemberAppender from "./TodoMemberAppender";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import useTodo from "@/composition/step3/useTodo";

export default {
  name: "TodoListByMembers",
  components: { TodoFooter, TodoItem, TodoItemAppender, TodoMemberAppender },
  props: {
    todoItems: { type: Object, default: () => ({}) },
    members: { type: Array, default: () => [] }
  },

  setup() {
    const {
      updateItem,
      toggleItem,
      updatePriority,
      removeItem,
      removeAllItem
    } = useTodo();

    return {
      updateItem,
      toggleItem,
      updatePriority,
      removeItem,
      removeAllItem
    };
  }
};
</script>
