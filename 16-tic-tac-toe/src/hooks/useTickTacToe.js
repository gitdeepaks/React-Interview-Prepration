import { useState } from "react";

function initialValue() {
  return Array(9).fill(null);
}

export default function useTickTacToe() {
  const [board, setboard] = useState(initialValue());
  const [isXNext, setisXNext] = useState(true);
  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(currentBoard) {
    for (let index = 0; index < WINNING_PATTERN.length; index++) {
      const [a, b, c] = WINNING_PATTERN[index];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  }

  function handleClick(idx) {
    const winner = calculateWinner(board);
    if (winner || board[idx]) return;

    const newBoard = [...board];
    newBoard[idx] = isXNext ? "X" : "O";
    setboard(newBoard);
    setisXNext(!isXNext);
  }

  function getStatusMessage() {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} is Winner`;
    if (!board.includes(null)) return `its a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  }
  function resetGame() {
    setboard(initialValue());
    setisXNext(true);
  }

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
}
