<template>
  <li class="todo-list-item" :class="className" :key="id">
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">
        <div class="chip-container" v-if="false">
          <select class="chip select">
            <option value="0" selected>순위</option>
            <option value="1">1순위</option>
            <option value="2">2순위</option>
          </select>
        </div>
        <span
          class="chip"
          :class="{
            primary: priority === PriorityTypes.FIRST,
            secondary: priority === PriorityTypes.SECOND
          }"
          v-html="`1순위`"
        />
        {{ contents }}
      </label>
      <button class="destroy"></button>
    </div>
    <input class="edit" :value="contents" />
  </li>
</template>

<script>
import { PriorityTypes } from "@/constants";
import { computed, reactive, toRefs } from "@vue/reactivity";
export default {
  name: "TodoItem",

  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: { type: String, required: true },
    contents: { type: String, required: true }
  },

  setup({ isCompleted }) {
    const state = reactive({
      editing: false
    });

    const className = computed(() => {
      if (state.editing) return "completed";
      if (isCompleted) return "completed";
      return null;
    });

    return {
      ...toRefs(state),
      className,
      PriorityTypes
    };
  }
};
</script>
