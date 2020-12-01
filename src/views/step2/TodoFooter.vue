<template>
  <div class="count-container">
    <span class="todo-count">총 <strong v-html="count" /> 개</span>
    <ul class="filters">
      <li>
        <a
          href="#"
          @click.prevent="$emit('change-filter', FilterTypes.ALL)"
          class="all"
          :class="{ selected: FilterTypes.ALL === filterType }"
          v-html="`전체보기`"
        />
      </li>
      <li>
        <a
          href="#"
          @click.prevent="$emit('change-filter', FilterTypes.ACTIVE)"
          class="active"
          :class="{ selected: FilterTypes.ACTIVE === filterType }"
          v-html="`해야할 일`"
        />
      </li>
      <li>
        <a
          href="#"
          @click.prevent="$emit('change-filter', FilterTypes.COMPLETED)"
          class="completed"
          :class="{ selected: FilterTypes.COMPLETED === filterType }"
          v-html="`완료한 일`"
        />
      </li>
    </ul>
    <button class="clear-completed" @click="$emit('remove-all-item')">
      모두 삭제
    </button>
  </div>
</template>

<script>
import { FilterTypes } from "@/constants";

export default {
  name: "TodoFooter",
  props: {
    count: { type: Number, default: 0 },
    filterType: { type: String, default: FilterTypes.ALL }
  },

  setup() {
    return {
      FilterTypes
    };
  }
};
</script>
