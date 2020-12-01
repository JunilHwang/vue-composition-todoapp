<template>
  <li :class="className">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="isCompleted" />
      <label class="label">
        <select class="chip select" v-if="editingPriority">
          <option
            value="0"
            :selected="PriorityTypes.NONE === priority"
            v-html="`0순위`"
          />
          <option
            value="1"
            :selected="PriorityTypes.FIRST === priority"
            v-html="`1순위`"
          />
          <option
            value="2"
            :selected="PriorityTypes.SECOND === priority"
            v-html="`2순위`"
          />
        </select>
        <todo-item-chip :priority="priority" />
        {{ contents }}
      </label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="완료된 타이틀" />
  </li>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";

import { PriorityTypes } from "@/constants";
import TodoItemChip from "@/views/step2/TodoItemChip";

export default {
  name: "TodoItem",
  components: { TodoItemChip },
  props: {
    id: { type: String, required: true },
    contents: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: { type: String, required: true }
  },

  setup(props) {
    const state = reactive({
      editingContents: false,
      editingPriority: false
    });

    const className = computed(() => {
      if (state.editingContents) return "editing";
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
