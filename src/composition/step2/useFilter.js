import { reactive, toRef } from "@vue/reactivity";
import { FilterTypes } from "@/constants";

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
