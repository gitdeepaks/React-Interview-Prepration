import "./App.css";
import UseEffectHook from "./hooks/use-effect-hook";
import UseRefHook from "./hooks/use-ref-hook";

// import UseStateHook from "./hooks/usestate";

function App() {
  return (
    <>
      Hello Hooks
      <UseEffectHook />
      <UseRefHook />
    </>
  );
}

export default App;
