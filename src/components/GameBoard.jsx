import { useState} from "react" ;
const initialGameBoard = [ 
    [null, null, null] ,
    [null, null, null] ,
    [null, null, null] ,
] ;



export default function GameBoard({ onselectSquare , activePlayerSymbol}) { 
    const [GameBoard , setGameBoard ] = useState(initialGameBoard) ; 
    function handkeSelectSquare(rowIndex , colIndex) {

setGameBoard( ( prevGameBoard) => {
const uodatedGameBoard = [...prevGameBoard.map( (innerArray) => [...innerArray] ) ]  ; 
 uodatedGameBoard [rowIndex][colIndex] = activePlayerSymbol ; 
return uodatedGameBoard ; 

} ) ;

onselectSquare() ;
    }
return ( <ol id="game-board"> 
{GameBoard.map( (row , rowIndex)=>(
    <li key= {rowIndex}>
    <ol>
{row.map( (playerSymbol, colIndex) => (
    <li key={colIndex}> 
    <button onClick={ () => handkeSelectSquare(rowIndex , colIndex )}>{playerSymbol}</button>
    </li> 
    )) }
    </ol>
</li> ) )}

</ol>

) ;

} ;