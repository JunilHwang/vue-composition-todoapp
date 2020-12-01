import { reactive, toRefs } from "@vue/reactivity";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export default function useUser() {
  const state = reactive({
    users: []
  });

  const fetchUsers = async () => {
    const users = await todoServiceOfStep2.fetchUsers();
    state.users = users.map(({ _id, name }) => ({ id: _id, name }));
  };

  const addUser = async name => {
    await todoServiceOfStep2.addUser(name);
    await fetchUsers();
  };

  const removeUser = async userId => {
    await todoServiceOfStep2.removeUser(userId);
    await fetchUsers();
  };

  return {
    ...toRefs(state),
    fetchUsers,
    addUser,
    removeUser
  };
}
