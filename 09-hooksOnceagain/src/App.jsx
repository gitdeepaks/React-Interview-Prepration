import "./App.css";
import UseContextHook from "./hooks/use-context-hook";
import UseEffectHook from "./hooks/use-effect-hook";
import UseRefHook from "./hooks/use-ref-hook";

// import UseStateHook from "./hooks/usestate";

function App() {
  return (
    <>
      Hello Hooks
      {/* <UseEffectHook /> */}
      <UseContextHook />
    </>
  );
}

export default App;
