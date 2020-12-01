<template>
  <input
    class="new-todo"
    placeholder="할일을 추가해주세요"
    @keydown.enter="addItem"
    autofocus
  />
</template>

<script>
export default {
  name: "TodoAppender",
  setup(props, context) {
    const addItem = event => {
      context.emit("add-item", event.target.value);
      event.target.value = "";
    };

    return { addItem };
  }
};
</script>

<style lang="scss" scoped>
.new-todo {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
