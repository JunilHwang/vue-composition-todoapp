import { reactive, toRef } from "@vue/reactivity";

export const FilterTypes = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed"
};

export default function useFilter() {
  const state = reactive({
    filterType: FilterTypes.ALL
  });

  const changeFilterType = filerType => {
    state.filterType = filerType;
  };

  return {
    filterType: toRef(state, "filterType"),
    changeFilterType
  };
}
