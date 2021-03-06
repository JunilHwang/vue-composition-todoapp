<template>
  <li :class="className">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="completed"
        @change="$emit('toggle', id)"
      />
      <label class="label" v-html="contents" @dblclick="handleEditing" />
      <button class="destroy" @click="handleDelete"></button>
    </div>
    <input
      v-if="editing"
      class="edit"
      :value="contents"
      :ref="el => (editor = el)"
      @keydown.enter="handleUpdate"
      @keydown.esc="handleCancel"
    />
  </li>
</template>

<script>
import { computed, nextTick, ref } from "vue";

export default {
  name: "TodoItem",

  props: {
    id: { type: Number, required: true },
    completed: { type: Boolean, default: false },
    contents: { type: String, default: "" },
    editing: { type: Boolean, default: false }
  },

  setup(props, context) {
    const editor = ref(null);
    const className = computed(() => {
      const { editing, completed } = props;
      return editing ? "editing" : completed ? "completed" : "";
    });

    const handleEditing = () => {
      context.emit("editing", props.id);
      nextTick(() => editor.value.focus());
    };

    const handleUpdate = ({ target }) => {
      context.emit("update", { id: props.id, contents: target.value });
    };

    const handleCancel = () => {
      context.emit("update", { id: props.id, contents: props.contents });
    };

    const handleDelete = () => {
      context.emit("delete", props.id);
    };

    return {
      className,
      editor,
      handleEditing,
      handleUpdate,
      handleCancel,
      handleDelete
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
  }

  .toggle {
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    opacity: 0;

    + {
      label {
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center left;
      }
    }

    &:checked {
      + {
        label {
          background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
        }
      }
    }
  }

  label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0 11px;
    font-size: 30px;
    color: #cc9a9a;
    transition: color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      color: #af5b5e;
    }

    &:after {
      content: "×";
    }
  }

  &:hover {
    .destroy {
      display: block;
    }
  }

  .edit {
    display: none;
  }

  &.editing {
    border-bottom: none;
    padding: 0;

    .edit {
      display: block;
      width: calc(100% - 43px);
      padding: 12px 16px;
      margin: 0 0 0 43px;
    }

    .view {
      display: none;
    }

    &:last-child {
      margin-bottom: -1px;
    }
  }

  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
}

.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
