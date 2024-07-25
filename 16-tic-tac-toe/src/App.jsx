import "./App.css";
import TickTacToe from "./components/TickTacToe";

const App = () => {
  return (
    <div className="game">
      <TickTacToe boardSize={5} />
    </div>
  );
};

export default App;
