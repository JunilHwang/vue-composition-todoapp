<template>
  <li :class="className">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="isCompleted" />
      <label class="label">
        <select class="chip select" v-if="editingPriority">
          <option value="0" selected>순위</option>
          <option value="1">1순위</option>
          <option value="2">2순위</option>
        </select>
        <template v-else>
          <span class="chip primary" v-if="priority === PriorityTypes.FIRST">1순위</span>
          <span class="chip primary" v-if="priority === PriorityTypes.FIRST">1순위</span>
        </template>
        해야할 아이템
      </label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="완료된 타이틀" />
  </li>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";

import {PriorityTypes} from "@/constants";

export default {
  name: "TodoItem",

  props: {
    id: { type: String, required: true },
    contents: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: { type: String, required: true }
  },

  setup(props) {
    const state = reactive({
      editingContents: false,
      editingPriority: false,
    });

    const className = computed(() => {
      if (state.editingContents) return "editing";
      if (props.isCompleted) return "completed";
      return null;
    });

    return {
      ...toRefs(state),
      className,
      PriorityTypes,
    };
  }
};
</script>
