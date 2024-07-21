import "./App.css";
import UseContextHook from "./hooks/use-context-hook";
import UseEffectHook from "./hooks/use-effect-hook";
import UseMemoAndCallbackHook from "./hooks/use-memo-and-context-hook";
import UseReducerHook from "./hooks/use-reducer-hook";
import UseRefHook from "./hooks/use-ref-hook";

// import UseStateHook from "./hooks/usestate";

function App() {
  return (
    <>
      Hello Hooks
      {/* <UseEffectHook /> */}
      <UseMemoAndCallbackHook />
    </>
  );
}

export default App;
