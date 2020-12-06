<template>
  <li class="add-user-button-container">
    <button id="add-user-button" class="ripple" @click="addMember">
      <span class="material-icons">add</span>
    </button>
  </li>
</template>

<script>
import useTeams from "@/composition/step3/useTeams";

export default {
  name: "TodoMemberAppender",

  setup() {
    const { addMember } = useTeams();
    return { addMember };
  }
};
</script>
