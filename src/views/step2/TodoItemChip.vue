<template>
  <span v-if="show" class="chip" :class="className" v-html="text" />
</template>

<script>
import { computed } from "@vue/reactivity";
import { PriorityTypes } from "@/constants";

export default {
  name: "TodoItemChip",

  props: {
    priority: { type: String, required: true }
  },

  setup(props) {
    const className = computed(() => {
      const { priority } = props;
      if (priority === PriorityTypes.FIRST) return "primary";
      if (priority === PriorityTypes.SECOND) return "secondary";
      return null;
    });

    const text = computed(() => {
      const { priority } = props;
      if (priority === PriorityTypes.FIRST) return "1순위";
      if (priority === PriorityTypes.SECOND) return "2순위";
      return null;
    });

    const show = computed(() => props.priority !== PriorityTypes.NONE);

    return {
      className,
      text,
      show
    };
  }
};
</script>
