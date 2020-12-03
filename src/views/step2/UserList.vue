<template>
  <section>
    <div id="user-list">
      <button
        v-for="{ id, name } in users"
        :key="id"
        class="ripple"
        :class="{ active: selectedUser === id }"
        @click="selectUser(id)"
        v-html="name"
      />
      <button class="ripple user-create-button" @click="addUser">
        + 유저 생성
      </button>
      <button class="ripple user-create-button" @click="removeUser">
        - 선택 삭제
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: { type: Array, default: () => [] },
    selectedUser: { type: String, default: null }
  },

  setup(props, { emit }) {
    const selectUser = id => {
      emit("select-user", id);
      emit("fetch-items", id);
    };

    const removeUser = () => {
      emit("remove-user");
      emit("reset-items");
    };

    const addUser = () => {
      const name = prompt("추가할 유저 이름을 입력해주세요");
      if (name.trim().length === 0) return;
      emit("add-user", name);
    };

    return {
      selectUser,
      addUser,
      removeUser
    };
  }
};
</script>
