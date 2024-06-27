import React, { useState } from "react";

import "./App.css";

// class components
class ChiledComponent extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export const NewCompFn = ({ name, age }) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={incrementCount}>Increment :{count}</button>
    </div>
  );
}

// childrenProp

export const Card = (props) => {
  return (
    <div
      style={{
        color: "orange",
      }}
    >
      <p>card title</p>
      {props.children}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State vs Props</h1>
      <h2>Props</h2>
      <p>Immutable data passed from parent to chiled components.</p>
      <p>- Immutable ans are used to communicate between components</p>
      <NewCompFn name="Jhon" age={25} />

      <h2>State</h2>
      <p>- Mutable and represent the internal state of the compoenent</p>
      <p>- Managed and controlled with in the components itself</p>
      <Counter />

      <h2>What is children and prop ?</h2>
      <Card>
        <b>THis is card 1</b>
      </Card>
      <Card>THis is card 2</Card>
    </div>
  );
}

export default App;
