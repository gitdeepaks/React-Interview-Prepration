function App() {
  return (
    <div>
      <h2>15 Most Asked Interview Questions</h2>
      <MyFunction />
      <ul>
        Ques 1: What is React and why is it used? Ques 2: What is JSX, and why
        is it used? Ques 3: What is a React component? Ques 4: What is the
        difference between state and props? Ques 5: What is prop drilling? Ques
        6: What is a React fragment, and why is it used? Ques 7: How do you
        define and use state in a React Functional component? How are they
        different from normal variables? Ques 8: How do you define and use state
        in a React class component? Ques 9: How do you pass props to a
        functional component? Ques 10: What are PropTypes? Ques 11: How do you
        use props in a class component? Ques 12: In how many ways can we
        export/import things from a JS Module? Ques 13: What is Virtual DOM?
        Ques 14: Reconciliation vs Rendering? Ques 15: What is the Diff
        Algorithm?
      </ul>
      <StateProps propExpample={"I am a prop"} />
      <h2>Pro Drilling</h2>
      <h2>FRAGMENTS</h2>
    </div>
  );
}

const MyFunction = () => {
  return (
    <ul>
      <li>Resuable building blocks of components</li>
      <li>It can be a class or a function that return JSX</li>
    </ul>
  );
};

function StateProps(props) {
  const [first, setfirst] = React.useState("I am a state");
  return (
    <ul>
      <li>{first}</li>
      <li>{props.propExpample}</li>
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
