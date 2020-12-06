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
              v-bind="item"
              :key="item.id"
              :member-id="member.id"
              @update-item="updateItem"
              @toggle-item="toggleItem"
              @update-priority="updatePriority"
              @remove-item="removeItem"
            />
          </ul>
        </section>
        <todo-footer
          :filter-type="filterType[member.id]"
          :member-id="member.id"
          :count="todoItems[member.id].length"
          @update-filter="changeFilterType"
          @remove-all="removeAllItem"
        />
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
import useFilter from "@/composition/step3/useFilter";

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

    const { filterType, changeFilterType } = useFilter();

    return {
      filterType,
      changeFilterType,
      updateItem,
      toggleItem,
      updatePriority,
      removeItem,
      removeAllItem
    };
  }
};
</script>
