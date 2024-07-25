import { useState, useEffect } from "react";

function initialValue(boardSize) {
  return Array(boardSize * boardSize).fill(null);
}

export default function useTicTacToe(boardSize) {
  const [board, setBoard] = useState(initialValue(boardSize));
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    setBoard(initialValue(boardSize));
    setIsXNext(true);
  }, [boardSize]);

  function generateWinningPattern() {
    const patterns = [];

    for (let jndex = 0; jndex < boardSize; jndex++) {
      const horizontalPattern = [];
      const verticalPattern = [];
      for (let i = 0; i < boardSize; i++) {
        horizontalPattern.push(jndex * boardSize + i);
        verticalPattern.push(i * boardSize + jndex);
      }
      patterns.push(horizontalPattern, verticalPattern);
    }

    const diagonal1 = [];
    const diagonal2 = [];
    for (let index = 0; index < boardSize; index++) {
      diagonal1.push(index * (boardSize + 1));
      diagonal2.push((index + 1) * (boardSize - 1));
    }
    patterns.push(diagonal1, diagonal2);
    return patterns;
  }

  const WINNING_PATTERN = generateWinningPattern();

  function calculateWinner(currentBoard) {
    for (let index = 0; index < WINNING_PATTERN.length; index++) {
      const pattern = WINNING_PATTERN[index];
      let countX = 0;
      let countO = 0;
      for (let j = 0; j < pattern.length; j++) {
        const cell = currentBoard[pattern[j]];
        if (cell === "X") {
          countX++;
        } else if (cell === "O") {
          countO++;
        }
      }
      if (countX === boardSize) return "X";
      if (countO === boardSize) return "O";
    }
    return null;
  }

  function handleClick(idx) {
    const winner = calculateWinner(board);
    if (winner || board[idx]) return;

    const newBoard = [...board];
    newBoard[idx] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function getStatusMessage() {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} is the winner!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? "X" : "O"}'s turn`;
  }

  function resetGame() {
    setBoard(initialValue(boardSize));
    setIsXNext(true);
  }

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
}
