<template>
  <div class="count-container">
    <span class="todo-count">총 <strong>0</strong> 개</span>
    <ul class="filters">
      <li>
        <a
          href="#all"
          :class="{ selected: FilterTypes.ALL === filterType }"
          @click.prevent="updateFilter(FilterTypes.ALL)"
          v-html="`전체보기`"
        />
      </li>
      <li>
        <a
          href="#active"
          :class="{ selected: FilterTypes.ACTIVE === filterType }"
          @click.prevent="updateFilter(FilterTypes.ACTIVE)"
          v-html="`해야할 일`"
        />
      </li>
      <li>
        <a
          href="#completed"
          :class="{ selected: FilterTypes.COMPLETED === filterType }"
          @click.prevent="updateFilter(FilterTypes.COMPLETED)"
          v-html="`완료한 일`"
        />
      </li>
    </ul>
    <button class="clear-completed">모두 삭제</button>
  </div>
</template>

<script>
import { FilterTypes } from "@/constants";

export default {
  name: "TodoFooter",

  props: {
    memberId: { type: String, required: true },
    filterType: { type: String, required: true }
  },

  setup(props, { emit }) {
    return {
      FilterTypes,
      updateFilter(filterType) {
        emit("update-filter", props.memberId, filterType);
      }
    };
  }
};
</script>
