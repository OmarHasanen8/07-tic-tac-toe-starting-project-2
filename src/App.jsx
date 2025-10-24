import Player from "./components/player" 
import GameBoard from "./components/GameBoard" 
import Log from "./components/Log"
import { useState} from "react" ; 
function App() { 
  const [ gameturn , setGameTurn ] = useState([]) ;
  const [ ActivePlayer, setActivePlayer ] = useState("X") ; 
  function handleselectSquare(rowIndex, colIndex) { 

    setActivePlayer( (prevActivePlayer) => ( prevActivePlayer === "X" ? "O" : "X" ) ) ;
    setGameTurn( (prevGameTurn) =>{
      let currentPlayer = 'X' ;
      if (prevGameTurn.length >0 &&prevGameTurn[0].Player ==='X' ) {
        currentPlayer = 'O' ;
      } 
   const updatedGameTurn = [ {
  square: { row: rowIndex, col: colIndex }, Player: currentPlayer }
    ,...prevGameTurn ,    
   ] ;  
  
   return updatedGameTurn ;} 
  ) 

  }

  return (<main> 
<div id="game-container"> 
<ol id="players"className="highlight-player" > 
<Player initialName ="Player 1" symbol="X" isActive={ActivePlayer==='X'} /> 
<Player initialName ="Player 2" symbol="O"isActive={ActivePlayer==='O'} />
</ol>

<GameBoard  onselectSquare={handleselectSquare} 
turns = {gameturn}/>

</div>
<Log/> 

</main>



) ;
  } 


export default App
