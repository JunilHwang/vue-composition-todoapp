<template>
  <section class="input-container">
    <input
      class="new-todo"
      placeholder="할 일을 입력해주세요."
      @keydown.enter="handleAddItem"
      autofocus
    />
  </section>
</template>

<script>
export default {
  name: "TodoAppender",

  setup(props, { emit }) {
    return {
      handleAddItem({ target }) {
        emit("add-item", target.value);
      }
    };
  }
};
</script>
