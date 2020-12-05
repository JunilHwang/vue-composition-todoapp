import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import {ADD_TEAM, FETCH_TEAMS} from "@/store/step3";

export default function useTeams() {
  const { mapActions, mapState } = useStoreModuleMapper("step3");
  const [teams] = mapState(["teams"]);
  const [fetchTeams, addTeam] = mapActions([FETCH_TEAMS, ADD_TEAM]);

  return {
    teams,
    fetchTeams,
    addTeam
  };
}
