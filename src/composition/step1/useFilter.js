import { reactive, toRef } from "@vue/reactivity";
import todoServiceOfStep1 from "@/services/todoServiceOfStep1";

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
