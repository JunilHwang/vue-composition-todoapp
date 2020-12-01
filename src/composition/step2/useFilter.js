import { reactive, toRef } from "@vue/reactivity";

export default function useFilter() {
  const state = reactive({
    filterType: todoServiceOfStep1.fetchFilterType()
  });

  const changeFilterType = filerType => {
    state.filterType = filerType;
    todoServiceOfStep1.putFilterType(filerType);
  };

  return {
    filterType: toRef(state, "filterType"),
    changeFilterType
  };
}
