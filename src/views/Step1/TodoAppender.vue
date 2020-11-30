<template>
  <component
    :is="'input'"
    id="new-todo-title"
    class="new-todo"
    placeholder="할일을 추가해주세요"
    autofocus
  />
</template>

<script>
export default {
  name: "TodoAppender",
  setup() {}
};
</script>
