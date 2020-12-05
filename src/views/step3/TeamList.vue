<template>
  <div>
    <div class="team-list-container">
      <div class="team-card-container" v-for="{ id, name } in teams" :key="id">
        <router-link :to="`/step3/@${id}`" class="card">
          <div class="card-title" v-html="name" />
        </router-link>
      </div>
      <div class="add-team-button-container" @click="addTeam">
        <button id="add-team-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useTeams from "@/composition/step3/useTeams";

export default {
  name: "TeamList",

  setup() {
    const { teams, fetchTeams, addTeam } = useTeams();

    fetchTeams();

    return { teams, addTeam };
  }
};
</script>
