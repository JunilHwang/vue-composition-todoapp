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
  const [orderedUsers, selectedUser] = mapGetters([
    "orderedUsers",
    "selectedUser"
  ]);
  const [selectUser] = mapMutations([SET_USER]);
  const [fetchUsers, addUser, removeUser] = mapActions([
    FETCH_USERS,
    ADD_USER,
    REMOVE_USER
  ]);

  return {
    selectedUserId,
    orderedUsers,
    selectedUser,
    selectUser,
    fetchUsers,
    addUser,
    removeUser
  };
}
