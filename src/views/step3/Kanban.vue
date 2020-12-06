<template>
  <div>
    <h1 id="user-title" data-username="eastjun" v-if="team !== null">
      <span><strong v-html="team.name" />'s Todo List</span>
    </h1>
    <ul class="todoapp-list-container flex-column-container">
      <li class="todoapp-container" v-for="member in members" :key="member.id">
        <h2>
          <span><strong v-html="member.name" />'s Todo List</span>
        </h2>
        <div class="todoapp">
          <section class="input-container">
            <input
              class="new-todo"
              placeholder="할 일을 입력해주세요."
              autofocus
            />
          </section>
          <section class="main">
            <ul class="todo-list">
              <li
                class="todo-list-item"
                :class="{
                  completed: isCompleted
                }"
                v-for="{
                  id,
                  contents,
                  isCompleted,
                  priority
                } in filterTodoItems[member.id]"
                :key="id"
              >
                <div class="view">
                  <input class="toggle" type="checkbox" />
                  <label class="label">
                    <div class="chip-container" v-if="false">
                      <select class="chip select">
                        <option value="0" selected>순위</option>
                        <option value="1">1순위</option>
                        <option value="2">2순위</option>
                      </select>
                    </div>
                    <span
                      class="chip"
                      :class="{
                        secondary: priority === 'SECOND',
                        primary: priority === 'FIRST'
                      }"
                      v-html="`1순위`"
                    />
                    {{ contents }}
                  </label>
                  <button class="destroy"></button>
                </div>
                <input class="edit" :value="contents" />
              </li>
            </ul>
          </section>
          <div class="count-container">
            <span class="todo-count">총 <strong>0</strong> 개</span>
            <ul class="filters">
              <li>
                <a href="#all" class="selected">전체보기</a>
              </li>
              <li>
                <a href="#priority">우선 순위</a>
              </li>
              <li>
                <a href="#active">해야할 일</a>
              </li>
              <li>
                <a href="#completed">완료한 일</a>
              </li>
            </ul>
            <button class="clear-completed">모두 삭제</button>
          </div>
        </div>
      </li>
      <li class="add-user-button-container">
        <button id="add-user-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useTeams from "@/composition/step3/useTeams";
import useTodo from "@/composition/step3/useTodo";

export default {
  name: "Kanban",
  setup() {
    const route = useRoute();
    const { team, members, fetchTeam } = useTeams();
    const { filterTodoItems, fetchItems } = useTodo();
    fetchTeam(route.params.teamId)
      .then(() => Promise.all(members.value.map(({ id }) => fetchItems(id))))
      .then(() => console.log(filterTodoItems.value));

    return {
      team,
      members,
      filterTodoItems
    };
  }
};
</script>
