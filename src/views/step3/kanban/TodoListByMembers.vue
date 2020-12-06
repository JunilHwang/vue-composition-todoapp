<template>
  <ul class="todoapp-list-container flex-column-container">
    <li class="todoapp-container" v-for="member in members" :key="member.id">
      <h2>
        <span><strong v-html="member.name" />'s Todo List</span>
      </h2>
      <div class="todoapp">
        <todo-appender />
        <section class="main">
          <ul class="todo-list">
            <todo-item
              v-for="item in todoItems[member.id]"
              :key="item.id"
              v-bind="item"
            />
          </ul>
        </section>
        <todo-footer />
      </div>
    </li>
    <li class="add-user-button-container">
      <button id="add-user-button" class="ripple">
        <span class="material-icons">add</span>
      </button>
    </li>
  </ul>
</template>

<script>
import TodoAppender from "./TodoAppender";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

export default {
  name: "TodoListByMembers",
  components: { TodoFooter, TodoItem, TodoAppender },
  props: {
    todoItems: { type: Object, default: () => ({}) },
    members: { type: Array, default: () => [] }
  }
};
</script>
