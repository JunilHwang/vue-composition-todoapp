<template>
  <div>
    <h1 id="user-title" data-username="eastjun">
      <span><strong>Team</strong>'s</span>
    </h1>
    <div class="team-list-container">
      <div class="team-card-container">
        <a href="/kanban.html" class="card">
          <div class="card-title">
            Black Coffee team
          </div>
        </a>
      </div>
      <div class="team-card-container">
        <a href="/kanban.html" class="card">
          <div class="card-title">
            Black Coffee team
          </div>
        </a>
      </div>
      <div class="team-card-container">
        <a href="/kanban.html" class="card">
          <div class="card-title">
            Black Coffee team
          </div>
        </a>
      </div>
      <div class="team-card-container">
        <a href="/kanban.html" class="card">
          <div class="card-title">
            Black Coffee team
          </div>
        </a>
      </div>
      <div class="add-team-button-container">
        <button id="add-team-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamList"
};
</script>
