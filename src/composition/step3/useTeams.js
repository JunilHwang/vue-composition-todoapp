import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { ADD_TEAM, FETCH_TEAM, FETCH_TEAMS } from "@/store/step3";

export default function useTeams() {
  const { mapState, mapActions } = useStoreModuleMapper("step3");
  const [teams] = mapState(["teams"]);
  const [fetchTeams, fetchTeam, addTeam] = mapActions([
    FETCH_TEAMS,
    FETCH_TEAM,
    ADD_TEAM
  ]);

  return {
    teams,
    fetchTeam,
    fetchTeams,
    addTeam: () => {
      const name = prompt("팀 이름을 입력해주세요");
      if (name.trim().length === 0) return;
      addTeam(name);
    }
  };
}
