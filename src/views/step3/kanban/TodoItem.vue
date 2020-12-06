<template>
  <li class="todo-list-item" :class="className" :key="id">
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">
        <div
          class="chip-container"
          v-if="priority === PriorityTypes.NONE || editingPriority"
        >
          <select class="chip select">
            <option value="0" selected>순위</option>
            <option value="1">1순위</option>
            <option value="2">2순위</option>
          </select>
        </div>
        <span
          v-else
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
    <input v-if="editingContents" class="edit" :value="contents" />
  </li>
</template>

<script>
import { PriorityTypes } from "@/constants";
import { computed, reactive, toRefs } from "@vue/reactivity";
export default {
  name: "TodoItem",

  props: {
    id: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: { type: String, required: true },
    contents: { type: String, required: true }
  },

  setup(props) {
    const state = reactive({
      editingContents: false,
      editingPriority: false
    });

    const className = computed(() => {
      if (state.editingContents) return "edit";
      if (props.isCompleted) return "completed";
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
