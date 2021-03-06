<template>
  <div class="step2">
    <user-list
      :users="user.orderedUsers.value"
      :selected-user="user.selectedUserId.value"
      @add-user="user.addUser"
      @select-user="user.selectUser"
      @remove-user="user.removeUser"
      @fetch-items="todo.fetchItems"
      @reset-items="todo.resetItems"
    />
    <template v-if="user.selectedUserId.value !== null">
      <h1 id="user-title">
        <span><strong v-html="user.selectedUser.value.name" />'s Todo List</span>
      </h1>
      <section class="todoapp">
        <todo-appender @add-item="todo.addItem" />
        <todo-items
          :todo-items="todo.filteredTodoItems.value"
          :list-loading="todo.listLoading.value"
          :append-loading="todo.appendLoading.value"
          @update-item="todo.updateItem"
          @remove-item="todo.removeItem"
          @toggle-item="todo.toggleItem"
          @update-priority="todo.updatePriority"
        />
        <todo-footer
          :count="todo.filteredTodoItems.value.length"
          :filter-type="filterType"
          @change-filter="changeFilterType"
          @remove-all="todo.removeAllItem"
        />
      </section>
    </template>
  </div>
</template>

<script>
import UserList from "@/views/step2/UserList";
import TodoAppender from "@/views/step2/TodoAppender";
import TodoItems from "@/views/step2/TodoItems";
import TodoFooter from "@/views/step2/TodoFooter";
import useUser from "@/composition/step2/useUser";
import useTodo from "@/composition/step2/useTodo";
import useFilter from "@/composition/step2/useFilter";

export default {
  name: "Step2",
  components: { TodoItems, TodoAppender, UserList, TodoFooter },

  setup() {
    const user = useUser();
    const todo = useTodo();
    const { filterType, changeFilterType } = useFilter();

    user.fetchUsers();

    return {
      user,
      todo,
      filterType,
      changeFilterType
    };
  }
};
</script>

<style lang="scss">
.step2 {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;

  @keyframes placeHolderShimmer {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      background-position: -418px 0;
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      background-position: 418px 0;
    }
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &:focus {
    outline: 0;
  }

  .hidden {
    display: none;
  }

  h1 {
    width: 100%;
    font-size: 60px;
    text-align: center;
    color: #333;
    font-weight: 100;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    margin-bottom: 50px;
  }

  .todoapp {
    background: #fff;
    margin: 30px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

    input {
      &::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }

      &::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }

      &::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
    }

    h1 {
      position: absolute;
      top: -155px;
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      text-align: center;
      color: rgba(175, 47, 47, 0.15);
      -webkit-text-rendering: optimizeLegibility;
      -moz-text-rendering: optimizeLegibility;
      text-rendering: optimizeLegibility;
    }
  }

  .new-todo {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .toggle-all {
    width: 1px;
    height: 1px;
    border: none;
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;

    + label {
      width: 60px;
      height: 34px;
      font-size: 0;
      position: absolute;
      top: -52px;
      left: -13px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);

      &:before {
        content: "❯";
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
      }
    }

    &:checked {
      + label {
        &:before {
          color: #737373;
        }
      }
    }
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      font-size: 24px;
      border-bottom: 1px solid #ededed;

      &:last-child {
        border-bottom: none;
      }

      .toggle {
        text-align: center;
        width: 40px;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none;
        -webkit-appearance: none;
        appearance: none;
        opacity: 0;

        + {
          label {
            background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center left;
          }
        }

        &:checked {
          + {
            label {
              background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
            }
          }
        }
      }

      label {
        word-break: break-all;
        padding: 15px 15px 15px 60px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
      }

      .destroy {
        display: none;
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0 11px;
        font-size: 30px;
        color: #cc9a9a;
        transition: color 0.2s ease-out;

        &:hover {
          color: #af5b5e;
        }

        &:after {
          content: "×";
        }
      }

      &:hover {
        .destroy {
          display: block;
        }
      }

      .edit {
        display: none;
      }
    }

    li.editing {
      border-bottom: none;
      padding: 0;

      .edit {
        display: block;
        width: 506px;
        padding: 12px 16px;
        margin: 0 0 0 43px;
      }

      .view {
        display: none;
      }

      &:last-child {
        margin-bottom: -1px;
      }
    }

    li.completed {
      label {
        color: #d9d9d9;
        text-decoration: line-through;
      }
    }
  }

  .count-container {
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

  .todo-count {
    float: left;
    text-align: left;

    strong {
      font-weight: 300;
    }
  }

  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;

    li {
      display: inline;
      a {
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
          border-color: rgba(175, 47, 47, 0.1);
        }
      }
      a.selected {
        border-color: rgba(175, 47, 47, 0.2);
      }
    }
  }

  .clear-completed {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .clear-completed {
    &:active {
      float: right;
      position: relative;
      line-height: 20px;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .info {
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;

    p {
      line-height: 1;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .ripple {
    background-position: center;
    transition: background 0.6s;
    font-weight: bold;

    &:hover {
      background: #616161 radial-gradient(circle, transparent 1%, #616161 1%)
        center/15000%;
      color: white;
    }

    &:active {
      background-color: #9e9e9e;
      background-size: 100%;
      transition: background 0s;
      color: white;
    }
  }

  button.ripple {
    border: none;
    border-radius: 2px;
    padding: 6px 9px;
    margin: 3px 0;
    font-size: 12px;
    cursor: pointer;
    color: #333;
    background-color: #eeeeee;
    box-shadow: 0 0 4px #999;
    outline: none;

    &.active {
      background-color: #424242;
      color: white;
    }
  }

  .animated-background {
    will-change: transform;
    animation: placeHolderShimmer 1s linear infinite forwards;
    -webkit-backface-visibility: hidden;
    background: #e6e6e6;
    background: linear-gradient(90deg, #eee 8%, #ddd 18%, #eee 33%);
    background-size: 800px 104px;
    height: 100%;
    position: relative;
  }

  .skel-mask-container {
    position: relative;
    height: 20px;
  }

  .skel-mask {
    background: #fff;
    position: absolute;
    z-index: 200;
  }

  .chip {
    width: 40px;
    display: block;
    font-size: 10px;
    color: #fff;
    font-weight: normal;
    border-radius: 15px;
    text-align: center;
    left: 60px;
    top: 3px;
  }

  .chip.primary {
    background-color: #d63a49;
  }

  .chip.secondary {
    background-color: #26c6da;
  }

  select.chip {
    border-color: #e0e0e0;
    color: #bdbdbd;
    width: 45px;
  }

  button.user-create-button.ripple {
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    .toggle-all {
      background: none;
    }

    .todo-list {
      li {
        .toggle {
          background: none;
          height: 40px;
        }
      }
    }
  }

  @media (max-width: 430px) {
    .count-container {
      height: 50px;
    }

    .filters {
      bottom: 10px;
    }
  }
}
</style>
