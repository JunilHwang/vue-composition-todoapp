import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { ADD_MEMBER, ADD_TEAM, FETCH_TEAM, FETCH_TEAMS } from "@/store/step3";

export default function useTeams() {
  const { mapState, mapActions } = useStoreModuleMapper("step3");
  const [teams, team, members] = mapState(["teams", "team", "members"]);
  const [fetchTeams, fetchTeam, addTeam, addMember] = mapActions([
    FETCH_TEAMS,
    FETCH_TEAM,
    ADD_TEAM,
    ADD_MEMBER
  ]);

  return {
    team,
    teams,
    members,
    fetchTeam,
    fetchTeams,
    addTeam: () => {
      const name = prompt("팀 이름을 입력해주세요");
      if (name.trim().length === 0) return;
      addTeam(name);
    },
    addMember: () => {
      const name = prompt("팀원의 이름을 입력해주세요");
      if (name.trim().length === 0) return;
      addMember(name);
    }
  };
}
