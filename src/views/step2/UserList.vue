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
      <button class="ripple user-create-button">+ 유저 생성</button>
      <button class="ripple user-create-button" @click="removeUser">
        - 선택 삭제
      </button>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "UserList",
  props: {
    users: { type: Array, default: () => [] }
  },

  setup(props, { emit }) {
    const selectedUser = ref(null);

    const selectUser = id => {
      selectedUser.value = id;
      emit("select-user", id);
    };

    const removeUser = () => {
      if (selectedUser.value === null) return;
      emit("remove-user", selectedUser.value);
    };

    return {
      selectedUser,
      selectUser,
      removeUser
    };
  }
};
</script>
