 
 import { useState } from "react" ;
 
  export default function Player({ initialName , symbol,isActive , onNameChange}) { 
    const [playerName , setPlayerName ] = useState(initialName) ;
const [ isEditing , setIsEditing ] = useState(false ) ;  
function toggleEdit() {
 setIsEditing(prev => !prev);  
 if (isEditing ) {
onNameChange(symbol,playerName) ; 
 }
}  
function handleChange(event) { 
    
setPlayerName(event.target.value) ;
}
let editableplayerName  = isEditing ? ( <input type="text" required value={ playerName } onChange={ handleChange}   className="player-name"/> ) : ( <span className="player-name"> {playerName }  </span>  ) ;
let buttonLabel = isEditing ? "Save" : "Edit" ;
return (<li className={ isActive ? 'active':undefined }> 
  <span className="Player"> 
    { editableplayerName }
 
<span className="player-symbol">  {symbol} </span>
</span> 
<button onClick={ toggleEdit}> {buttonLabel} </button>  
</li>

)

}