<template>
  <div>
    <h1 id="user-title" data-username="eastjun" v-if="team !== null">
      <span><strong v-html="team.name" />'s Todo List</span>
    </h1>
    <todo-list-by-members :todo-items="filteredTodoItems" :members="members" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useTeams from "@/composition/step3/useTeams";
import useTodo from "@/composition/step3/useTodo";
import TodoListByMembers from "@/views/step3/kanban/TodoListByMembers";

export default {
  name: "Kanban",
  components: { TodoListByMembers },
  setup() {
    const route = useRoute();
    const { team, members, fetchTeam } = useTeams();
    const { filteredTodoItems, fetchItems } = useTodo();
    fetchTeam(route.params.teamId)
      .then(() => Promise.all(members.value.map(({ id }) => fetchItems(id))))

    return {
      team,
      members,
      filteredTodoItems
    };
  }
};
</script>
