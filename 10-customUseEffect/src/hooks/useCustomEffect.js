import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const isPrevDeps = useRef([]);
  //First render case
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanUp = effect();
    return () => {
      if (cleanUp && typeof cleanUp === "function" && deps) {
        cleanUp();
      }
    };
  }

  //   depnedency

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(isPrevDeps.current)
    : true;

  if (depsChanged) {
    effect();
  }
  //cleanup case

  isPrevDeps.current = deps || [];
};

export default useCustomEffect;
