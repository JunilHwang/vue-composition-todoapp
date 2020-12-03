import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { SET_FILTER_TYPE } from "@/store/step2";

export default function useFilter() {
  const { mapState, mapMutations } = useStoreModuleMapper("step2");
  const [filterType] = mapState(["filterType"]);
  const [changeFilterType] = mapMutations([SET_FILTER_TYPE]);

  return {
    filterType,
    changeFilterType
  };
}
