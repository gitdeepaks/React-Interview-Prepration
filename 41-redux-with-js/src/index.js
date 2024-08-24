import "./index.css";
const initialState = [];
const reducer = (state, initialState, action) => {
  return state;
};

const store = Redux.creeateStore(reducer);
console.log("store", store);

store.subscribe = () => {
  console.log("subs", store.getState());
};

store.dispatch({ type: "Add_USER", payload: "fooe" });
document.querySelector("#root").innerHTML = `
<div class="content">
  <h1>Vanilla Rsbuild</h1>
  <p>Start building amazing things with Rsbuild.</p>
</div>
`;
