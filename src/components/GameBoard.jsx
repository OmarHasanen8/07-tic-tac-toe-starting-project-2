import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onselectSquare, turns }) {
  
  let GameBoard = initialGameBoard.map(innerArray => [...innerArray]);

  for (const turn of turns) {
    const { square, Player } = turn;
    const { row, col } = square;
    GameBoard[row][col] = Player;
  }

  return (
    <ol id="game-board">
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onselectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}