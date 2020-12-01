<template>
  <div class="count-container">
    <span class="todo-count">총 <strong v-html="count" /> 개</span>
    <ul class="filters">
      <li>
        <a
          href="#"
          class="all"
          :class="{ selected: filterType === FilterTypes.ALL }"
          @click.prevent="$emit('change-filter', FilterTypes.ALL)"
        >
          전체보기
        </a>
      </li>
      <li>
        <a
          href="#"
          class="active"
          :class="{ selected: filterType === FilterTypes.ACTIVE }"
          @click.prevent="$emit('change-filter', FilterTypes.ACTIVE)"
        >
          해야할 일
        </a>
      </li>
      <li>
        <a
          href="#"
          class="completed"
          :class="{ selected: filterType === FilterTypes.COMPLETED }"
          @click.prevent="$emit('change-filter', FilterTypes.COMPLETED)"
        >
          완료한 일
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { FilterTypes } from "@/constants";

export default {
  name: "TodoFooter",
  props: {
    filterType: { type: String, default: FilterTypes.ALL },
    count: { type: Number, default: 0 }
  },

  setup() {
    return { FilterTypes };
  }
};
</script>

<style lang="scss" scoped>
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
</style>
