import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
const [players, setPlayers] = useState({ 
  X: 'Player 1' ,
  O: 'Player 2' 
});
  // تحديث حالة اللعبة
  let gameBoard = initialGameBoard.map(inner => [...inner]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square; 
    gameBoard[row][col] = player;
  }

  // التحقق من الفائز
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];

    if (first && first === second && first === third) {
      winner = players[first];
      break;
    }
  }
const hasDraw = gameTurns.length === 9&& !winner ; 
  function handleSelectSquare(rowIndex, colIndex) {
    // تجاهل الخانة لو كانت مشغولة أو انتهت اللعبة
    if (gameBoard[rowIndex][colIndex] !== null || winner) return;

    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
function handleRematch() { 
setGameTurns([]);




 } 
 function handlePlayersNameChange(symbol,newName) {
setPlayers(prevPlayers => ({ 
...prevPlayers,
[symbol] : newName
}));





 } 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"} 
            onNameChange={handlePlayersNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"} 
            onNameChange={handlePlayersNameChange}
          />
        </ol>

        {(winner || hasDraw )&& <GameOver winner={winner} onRematch={handleRematch}/>}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;