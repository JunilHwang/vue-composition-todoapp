import { useStore } from "vuex";
import { SET_FILTER_TYPE } from "@/store/step1";
import { computed } from "@vue/reactivity";

export default function useFilter() {
  const store = useStore();

  const changeFilterType = filterType => {
    store.commit(SET_FILTER_TYPE, filterType);
  };

  return {
    filterType: computed(() => store.state.step1.filterType),
    changeFilterType
  };
}
