import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { SET_FILTER_TYPE } from "@/store/step3";

export default function useFilter() {
  const { mapState, mapMutations } = useStoreModuleMapper("step3");
  const [filterType] = mapState(["filterType"]);
  const [setFilterType] = mapMutations([SET_FILTER_TYPE]);

  const changeFilterType = (id, type) => {
    setFilterType({
      ...filterType.value,
      [id]: type
    });
  };

  return {
    filterType,
    changeFilterType
  };
}
