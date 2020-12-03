import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default function useStoreModuleMapper(namespace) {
  const store = useStore();

  const mapState = keys =>
    keys.map(key => computed(() => store.state[namespace][key]));

  const mapMutations = keys =>
    keys.map(key => (...payload) =>
      store.commit(`${namespace}/${key}`, ...payload)
    );

  const mapActions = keys =>
    keys.map(key => (...payload) =>
      store.dispatch(`${namespace}/${key}`, ...payload)
    );

  const mapGetters = keys =>
    keys.map(key => computed(() => store.getters[`${namespace}/${key}`]));

  return {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  };
}
