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
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "UserList",
  props: {
    users: { type: Array, default: () => [] }
  },

  setup(props, { emit }) {
    const state = reactive({
      selectedUser: null
    });

    const selectUser = id => {
      state.selectedUser = id;
      emit("select-user", id);
    };

    const removeUser = () => {
      if (state.selectedUser === 0) return;
      emit("remove-user", state.selectedUser);
    };

    const addUser = () => {
      const name = prompt("추가할 유저 이름을 입력해주세요");
      if (name.trim().length === 0) return;
      emit("add-user", name)
    };

    return {
      ...toRefs(state),
      selectUser,
      addUser,
      removeUser
    };
  }
};
</script>
