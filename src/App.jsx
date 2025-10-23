import Player from "./components/player" 
import GameBoard from "./components/GameBoard" 
import { useState} from "react" ; 
function App() {
  const [ ActivePlayer, setActivePlayer ] = useState("X") ; 
  function handleselectSquare() { 
    setActivePlayer( (prevActivePlayer) => ( prevActivePlayer === "X" ? "O" : "X" ) ) ;
  }
  return (<main> 
<div id="game-container"> 
<ol id="players"className="highlight-player" > 
<Player initialName ="Player 1" symbol="X" isActive={ActivePlayer==='X'} /> 
<Player initialName ="Player 2" symbol="O"isActive={ActivePlayer==='O'} />
</ol>

<GameBoard  onselectSquare={handleselectSquare} activePlayerSymbol={ActivePlayer}/>

</div>
LOG 

</main>



) ;
  } 


export default App
