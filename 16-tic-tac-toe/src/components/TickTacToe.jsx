import React, { useState } from "react";
import useTickTacToe from "../hooks/useTickTacToe";

export default function TickTacToe() {
  const { board, calculateWinner, resetGame, getStatusMessage, handleClick } =
    useTickTacToe();

  return (
    <div className="game">
      <div className="status">
        <h5>{getStatusMessage()}</h5>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, idx) => {
          return (
            <button
              className="cell"
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}
