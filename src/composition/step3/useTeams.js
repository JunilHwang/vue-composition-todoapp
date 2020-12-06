import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { ADD_TEAM, FETCH_TEAMS, SET_TEAM } from "@/store/step3";

export default function useTeams() {
  const { mapState, mapMutations, mapActions } = useStoreModuleMapper("step3");
  const [teams] = mapState(["teams"]);
  const [setTeam] = mapMutations([SET_TEAM]);
  const [fetchTeams, addTeam] = mapActions([FETCH_TEAMS, ADD_TEAM]);

  return {
    teams,
    setTeam,
    fetchTeams,
    addTeam: () => {
      const name = prompt("팀 이름을 입력해주세요");
      if (name.trim().length === 0) return;
      addTeam(name);
    }
  };
}
