<template>
  <li :class="className">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="isCompleted"
        @change="$emit('toggle-item', id)"
      />
      <label class="label" @dblclick="editContents(true)">
        <select
          class="chip select"
          v-if="editingPriority || priority === PriorityTypes.NONE"
          @change="updatePriority"
        >
          <option
            v-for="(value, key) in Object.values(PriorityTypes)"
            :key="`priority_${id}_${key}`"
            :value="value"
            :selected="value === priority"
            v-html="`${key}순위`"
          />
        </select>
        <todo-item-chip
          v-else
          :priority="priority"
          @edit-priority="editPriority"
        />
        {{ contents }}
      </label>
      <button class="destroy" @click="$emit('remove-item', id)" />
    </div>
    <input
      class="edit"
      :ref="el => (editor = el)"
      :value="contents"
      @keyup.enter="updateItem"
      @keyup.esc="editContents(false)"
    />
  </li>
</template>

<script>
import { computed, reactive, ref, toRefs } from "@vue/reactivity";

import { PriorityTypes } from "@/constants";
import TodoItemChip from "@/views/step2/TodoItemChip";
import { nextTick } from "@vue/runtime-core";

export default {
  name: "TodoItem",
  components: { TodoItemChip },
  props: {
    id: { type: String, required: true },
    contents: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: { type: String, required: true }
  },

  setup(props, { emit }) {
    const editor = ref(null);
    const state = reactive({
      editingContents: false,
      editingPriority: false
    });

    const className = computed(() => {
      if (state.editingContents) return "editing";
      if (props.isCompleted) return "completed";
      return null;
    });

    const editContents = type => {
      state.editingContents = type;
      nextTick(() => editor.value.focus());
    };

    const editPriority = () => {
      state.editingPriority = true;
    };

    const updatePriority = ({ target }) => {
      emit("update-priority", props.id, target.value);
      state.editingPriority = false;
    };

    const updateItem = ({ target }) => {
      emit("update-item", props.id, target.value);
      editContents(false);
    };

    return {
      ...toRefs(state),
      className,
      PriorityTypes,
      editor,
      editContents,
      editPriority,
      updatePriority,
      updateItem
    };
  }
};
</script>
