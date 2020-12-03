import todoServiceOfStep2 from "@/services/todoServiceOfStep2";
import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { ADD_USER, FETCH_USERS, REMOVE_USER, SET_USER } from "@/store/step2";

export default function useUser() {
  const {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } = useStoreModuleMapper("step2");
  const [selectedUserId] = mapState(["selectedUserId"]);
  const [selectedUser] = mapGetters(["selectedUser"]);
  const [selectUser] = mapMutations([SET_USER]);
  const [fetchUsers, addUser, removeUser] = mapActions([
    FETCH_USERS,
    ADD_USER,
    REMOVE_USER
  ]);

  return {
    selectedUserId,
    selectedUser,
    selectUser,
    fetchUsers,
    addUser,
    removeUser
  };
}
