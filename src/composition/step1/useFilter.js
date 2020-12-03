import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { SET_FILTER_TYPE } from "@/store/step1";

export default function useFilter() {
  const { mapState, mapMutations } = useStoreModuleMapper("step1");
  const [filterType] = mapState(["filterType"]);
  const [changeFilterType] = mapMutations([SET_FILTER_TYPE]);

  return {
    filterType,
    changeFilterType
  };
}
