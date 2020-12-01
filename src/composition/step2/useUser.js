import { reactive, toRef } from "@vue/reactivity";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export default function useUser() {
  const state = reactive({
    users: []
  });

  const fetchUsers = async () => {
    const users = await todoServiceOfStep2.fetchUsers();
    state.users = users.map(({ _id, name }) => ({ id: _id, name }));
  };

  const removeUser = async userId => {
    await todoServiceOfStep2.removeUser(userId);
    await fetchUsers();
  };

  return {
    users: toRef(state, "users"),
    fetchUsers,
    removeUser
  };
}
