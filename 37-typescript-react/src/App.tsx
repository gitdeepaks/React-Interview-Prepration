// import './App.css';

import { useState } from "react";


interface ButtonProps {
  text: string,
  icon: string
  children?: JSX.Element
}
const Button = ({ text, icon }: ButtonProps): JSX.Element => {
  return <button>{text}
    {icon && <span>{icon}</span>}
  </button>
}


const App = () => {

  // const [user, setuser] = useState<User | null>(null)
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button text='Lets goo' icon='🚀' >

        <span>Hello</span>
      </Button>
    </div>
  );
};

export default App;
