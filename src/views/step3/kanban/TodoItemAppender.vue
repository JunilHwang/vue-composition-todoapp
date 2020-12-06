<template>
  <section class="input-container">
    <input
      class="new-todo"
      placeholder="할 일을 입력해주세요."
      autofocus
      @keypress.enter="addItem"
    />
  </section>
</template>

<script>
import useTodo from "@/composition/step3/useTodo";

export default {
  name: "TodoItemAppender",

  props: {
    memberId: { type: String, required: true }
  },

  setup(props) {
    const { addItem } = useTodo();

    return {
      addItem({ target }) {
        addItem({
          memberId: props.memberId,
          contents: target.value
        });
        target.value = "";
      }
    };
  }
};
</script>
