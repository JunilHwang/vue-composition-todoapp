<template>
  <li class="todo-list-item" :class="className" :key="id">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="isCompleted"
        @change="toggleItem"
      />
      <label class="label" @dblclick="editContents">
        <div class="chip-container">
          <select
            class="chip select"
            @change="updatePriority"
            v-if="priority === PriorityTypes.NONE || editingPriority"
          >
            <option
              :value="PriorityTypes.NONE"
              :selected="PriorityTypes.NONE === priority"
              v-html="`순위`"
            />
            <option
              :value="PriorityTypes.FIRST"
              :selected="PriorityTypes.FIRST === priority"
              v-html="`1순위`"
            />
            <option
              :value="PriorityTypes.SECOND"
              :selected="PriorityTypes.SECOND === priority"
              v-html="`2순위`"
            />
          </select>
          <span
            v-else
            class="chip"
            :class="{
              primary: priority === PriorityTypes.FIRST,
              secondary: priority === PriorityTypes.SECOND
            }"
            @click="editPriority"
            v-html="`${PriorityTypes.FIRST === priority ? 1 : 2}순위`"
          />
        </div>
        {{ contents }}
      </label>
      <button class="destroy"></button>
    </div>
    <input
      class="edit"
      :value="contents"
      :ref="el => (editor = el)"
      @keyup.enter="updateItem"
      @keyup.esc="cancelEditing"
    />
  </li>
</template>

<script>
import { nextTick } from "vue";
import { computed, reactive, ref, toRefs } from "@vue/reactivity";
import { PriorityTypes } from "@/constants";

export default {
  name: "TodoItem",

  props: {
    id: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: { type: String, required: true },
    contents: { type: String, required: true },
    memberId: { type: String, required: true }
  },

  setup(props, { emit }) {
    const state = reactive({
      editingContents: false,
      editingPriority: false
    });

    const className = computed(() => {
      if (state.editingContents) return "editing";
      if (props.isCompleted) return "completed";
      return null;
    });

    const editor = ref(null);

    return {
      ...toRefs(state),
      className,
      PriorityTypes,
      editor,

      editPriority() {
        state.editingPriority = true;
      },

      editContents() {
        state.editingContents = true;
        nextTick(() => editor.value.focus());
      },

      cancelEditing() {
        state.editingContents = false;
      },

      updatePriority({ target }) {
        emit("update-priority", {
          memberId: props.memberId,
          itemId: props.id,
          priority: target.value
        });
        state.editingPriority = false;
      },

      updateItem({ target }) {
        emit("update-item", {
          memberId: props.memberId,
          itemId: props.id,
          contents: target.value
        });
        state.editingContents = false;
      },

      toggleItem() {
        emit("toggle-item", { memberId: props.memberId, itemId: props.id });
      }
    };
  }
};
</script>
