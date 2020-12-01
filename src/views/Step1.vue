<template>
  <div class="step1">
    <div class="todoapp">
      <h1>TODOS STEP1</h1>
      <todo-appender @add-item="addItem" />
      <main>
        <todo-items
          :items="items"
          @update-item="updateItem"
          @editing-item="editingItem"
          @delete-item="deleteItem"
          @toggle-item="toggleItem"
        />
        <todo-footer />
      </main>
    </div>
  </div>
</template>

<script>
import TodoAppender from "@/views/Step1/TodoAppender";
import TodoFooter from "@/views/Step1/TodoFooter";
import TodoItems from "@/views/Step1/TodoItems";
import useTodo from "@/composition/step1/useTodo";
import { computed } from "vue";

export default {
  name: "Step1",
  components: { TodoItems, TodoFooter, TodoAppender },
  setup() {
    const {
      todoItems,
      addItem,
      updateItem,
      editingItem,
      deleteItem,
      toggleItem
    } = useTodo();

    const items = computed(() =>
      todoItems.value.ids.map(v => todoItems.value.entities[v])
    );

    return {
      items,
      addItem,
      updateItem,
      editingItem,
      deleteItem,
      toggleItem
    };
  }
};
</script>

<style lang="scss">
.step1 {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;

  input {
    &::-webkit-input-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }
  }

  .todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

    h1 {
      position: absolute;
      top: -125px;
      width: 100%;
      font-size: 60px;
      text-align: center;
      color: dimgray;
      font-weight: 100;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
  }

  main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }
}
</style>
