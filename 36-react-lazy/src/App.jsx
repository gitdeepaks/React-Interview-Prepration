import React from "react";
import "./App.css";
const About = React.lazy(() => import("./About"));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <React.Suspense fallback={<div>loading...</div>}>
        <About />
      </React.Suspense>
    </div>
  );
};

export default App;
