<template>
  <section>
    <div id="user-list">
      <button v-for="">

      </button>
      <button class="ripple active">eastjun</button>
      <button class="ripple">westjun</button>
      <button class="ripple">southjun</button>
      <button class="ripple">northjun</button>
      <button class="ripple">hojun</button>
      <button class="ripple user-create-button">+ 유저 생성</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: { type: Array, default: () => [] }
  }
};
</script>
